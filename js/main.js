// js/main.js - оновлена версія з URL routing
class ModelsCatalog {
    constructor() {
        this.filteredModels = [...modelsData];
            this.selectedTags = [];
        this.loadedDescriptions = {};
        setTimeout(() => {
            this.init();
        }, 100);
    }

    async init() {
        console.log('Marked available:', typeof marked);
        this.setupFilters();
        this.restoreFiltersFromURL();
        await this.applyFilters({ updateURL: false });
        this.setupModal();
        this.setupURLRouting();
        this.handleInitialURL();
    }

    setupURLRouting() {
        window.addEventListener('popstate', async () => {
            this.restoreFiltersFromURL();
            await this.applyFilters({ updateURL: false });
            this.handleURLChange();
        });
    }

    restoreFiltersFromURL() {
        const url = new URL(window.location.href);
        const categoryFilter = document.getElementById('category-filter');
        const searchFilter = document.getElementById('search-filter');
        const allowedTags = new Set(modelsData.flatMap(model => model.tags));
        const category = url.searchParams.get('category') || '';

        categoryFilter.value = Object.prototype.hasOwnProperty.call(CATEGORIES, category) ? category : '';
        searchFilter.value = url.searchParams.get('search') || '';
        this.selectedTags = [...new Set(url.searchParams.getAll('tag'))].filter(tag => allowedTags.has(tag));
        this.updateSelectedTagsDisplay();
        this.updateTagFilterOptions();
    }

    updateFilterURL() {
        const category = document.getElementById('category-filter').value;
        const search = document.getElementById('search-filter').value.trim();
        const url = new URL(window.location.href);
        url.searchParams.delete('category');
        url.searchParams.delete('search');
        url.searchParams.delete('tag');
        if (category) url.searchParams.set('category', category);
        if (search) url.searchParams.set('search', search);
        this.selectedTags.forEach(tag => url.searchParams.append('tag', tag));
        history.replaceState(history.state, document.title, `${url.pathname}${url.search}${url.hash}`);
    }

    // Обробка початкового URL при завантаженні сторінки
    handleInitialURL() {
        const hash = window.location.hash;
        if (hash && hash.startsWith('#')) {
            const modelId = hash.substring(1);
        const model = modelsData.find(m => m.id === modelId);
            if (model) {
                setTimeout(() => {
                this.openModal(modelId, false);
                }, 500); // Невелика затримка для завершення ініціалізації
    }
        }
    }

    // Обробка зміни URL
    handleURLChange() {
        const hash = window.location.hash;
        if (hash && hash.startsWith('#')) {
            const modelId = hash.substring(1);
            const model = modelsData.find(m => m.id === modelId);
            if (model) {
                this.openModal(modelId, false); // false = не оновлювати URL повторно
            }
        } else {
            // Якщо хеш порожній, закриваємо модальне вікно
            this.closeModal(false); // false = не оновлювати URL
        }
    }

    async loadDescription(model) {
        if (this.loadedDescriptions[model.id]) {
            return this.loadedDescriptions[model.id];
        }

        if (model.descriptionFile) {
            try {
                console.log(`Loading description from: ${model.descriptionFile}`);
                const response = await fetch(`${model.descriptionFile}?v=${window.BUILD_VERSION || 'dev'}`);
                if (response.ok) {
                    const markdown = await response.text();
                    this.loadedDescriptions[model.id] = markdown;
                    return markdown;
                } else {
                    console.warn(`Failed to load ${model.descriptionFile}, using fallback`);
                }
            } catch (error) {
                console.error(`Error loading description for ${model.id}:`, error);
            }
        }

        const fallback = model.description || `## ${model.title}\n\nОпис недоступний.`;
        this.loadedDescriptions[model.id] = fallback;
        return fallback;
    }

    parseMarkdown(text) {
        console.log('Parsing markdown:', text.substring(0, 50));

        if (typeof marked === 'undefined') {
            console.error('Marked не завантажений!');
            return text;
        }

        try {
            let html;
            if (typeof marked.parse === 'function') {
                html = marked.parse(text);
            } else if (typeof marked === 'function') {
                html = marked(text);
            } else {
                console.error('Marked не є функцією!');
                return text;
            }

            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;

            tempDiv.querySelectorAll('a[href^="http"]').forEach(link => {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            });

            return tempDiv.innerHTML;
        } catch (error) {
            console.error('Помилка парсингу:', error);
            return text;
        }
    }

    async getShortDescription(model) {
        const markdown = await this.loadDescription(model);
        const htmlContent = this.parseMarkdown(markdown);

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlContent;

        const allText = tempDiv.textContent || tempDiv.innerText || '';
        const lines = allText.split('\n').filter(line => line.trim());
        const description = lines.find(line => !line.startsWith('#') && line.trim()) || lines[0] || 'Опис відсутній';

        return description.length > 150 ? description.substring(0, 150) + '...' : description;
    }

    async renderModelsGrid(models) {
        const modelCards = [];

        for (const model of models) {
            const shortDesc = await this.getShortDescription(model);

            modelCards.push(`
                <div class="model-card" data-model-id="${model.id}">
                    <div class="model-image">
                        ${model.preview ?
                            `<img src="${model.preview}" alt="${model.title}" onerror="this.style.display='none'">` :
                            '📦'
                        }
            </div>
                    <div class="model-info">
                        <h3 class="model-title">${model.title}</h3>
                        <div class="model-tags">
                            ${model.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                        <div class="model-description">${shortDesc}</div>
                    </div>
                </div>
            `);
        }

        return modelCards.join('');
    }

    // Оновлюємо метод openModal
    async openModal(modelId, updateURL = true) {
        const model = modelsData.find(m => m.id === modelId);
        if (!model) return;

        const modal = document.getElementById('model-modal');

        // Оновлюємо URL якщо потрібно
        if (updateURL) {
            const url = new URL(window.location.href);
            url.hash = modelId;
            history.pushState({modelId}, model.title, `${url.pathname}${url.search}${url.hash}`);
        }

        document.getElementById('modal-title').textContent = model.title;
        document.getElementById('modal-category').innerHTML =
            `<span class="model-category">${CATEGORIES[model.category]}</span>`;
        document.getElementById('modal-tags').innerHTML =
            model.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        // Показуємо лоадер поки завантажується опис
        document.getElementById('modal-description').innerHTML = '<p>Завантаження опису...</p>';

        // Асинхронно завантажуємо та парсимо опис
        const description = await this.loadDescription(model);
        const parsedDescription = this.parseMarkdown(description);
        document.getElementById('modal-description').innerHTML = parsedDescription;

        this.setupModalGallery(model.images);
        document.getElementById('modal-details').href = model.detailsUrl;
        document.getElementById('modal-details').textContent = model.detailsLabel || '📥 Відкрити в GitHub';

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Блокуємо скролл body
    }

    // Новий метод для закриття модального вікна
    closeModal(updateURL = true) {
        const modal = document.getElementById('model-modal');
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Відновлюємо скролл body

        // Оновлюємо URL якщо потрібно
        if (updateURL) {
            const url = new URL(window.location.href);
            url.hash = '';
            history.pushState({}, document.title, `${url.pathname}${url.search}`);
        }
    }

    async renderCatalog() {
        const catalogContent = document.getElementById('catalog-content');

        if (this.filteredModels.length === 0) {
            catalogContent.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">📦</div>
                    <h3>Моделі не знайдено</h3>
                    <p>Спробуйте змінити фільтри</p>
                </div>
            `;
            return;
        }

        const groupedModels = this.groupModelsByCategory();
        const categoryPromises = [];

        for (const [categoryId, categoryName] of Object.entries(CATEGORIES)) {
            const categoryModels = groupedModels[categoryId] || [];
            const categoryIcon = this.getCategoryIcon(categoryId);

            if (categoryModels.length > 0) {
                categoryPromises.push(
                    this.renderModelsGrid(categoryModels).then(modelsGrid => ({
                        categoryId,
                        categoryName,
                        categoryIcon,
                        modelsGrid,
                        isEmpty: false
                    }))
                    );
            } else {
                categoryPromises.push(Promise.resolve({
                    categoryId,
                    categoryName,
                    categoryIcon,
                    modelsGrid: '',
                    isEmpty: true
                }));
        }
    }

        const categoryResults = await Promise.all(categoryPromises);

        catalogContent.innerHTML = categoryResults.map(({ categoryId, categoryName, categoryIcon, modelsGrid, isEmpty }) => `
            <div class="category-section ${isEmpty ? 'empty' : ''}">
                <div class="category-header">
                    <span class="category-icon">${categoryIcon}</span>
                    <span>${categoryName}</span>
                    <span class="category-count">(${groupedModels[categoryId]?.length || 0})</span>
                </div>
                <div class="category-models">
                    ${!isEmpty ?
                        `<div class="models-grid">${modelsGrid}</div>` :
                        `<div class="empty-category-message">Поки що немає моделей в цій категорії</div>`
}
                </div>
            </div>
        `).join('');

        this.setupModelCardEvents();
    }

    groupModelsByCategory() {
        return this.filteredModels.reduce((groups, model) => {
            const category = model.category;
            if (!groups[category]) {
                groups[category] = [];
            }
            groups[category].push(model);
            return groups;
        }, {});
    }

    getCategoryIcon(categoryId) {
        const icons = {
            'antennas': '📡',
            'fpv-antenna-mounts': '📡',
            'fpv-cam-mounts': '📷',
            'fpv-misc': '🚁',
            'misc': '🔧'
        };
        return icons[categoryId] || '📦';
    }

    setupModelCardEvents() {
        document.querySelectorAll('.model-card').forEach(card => {
            card.addEventListener('click', () => {
                const modelId = card.dataset.modelId;
                this.openModal(modelId);
});
        });
    }

    setupFilters() {
        const categoryFilter = document.getElementById('category-filter');
        const tagFilter = document.getElementById('tag-filter');
        const tagFilterToggle = document.getElementById('tag-filter-toggle');
        const tagFilterPanel = document.getElementById('tag-filter-panel');
        const tagSearch = document.getElementById('tag-search');
        const searchFilter = document.getElementById('search-filter');
        const clearButton = document.getElementById('clear-filters');

        this.setupTagFilter();

        const applyFilters = async ({ updateURL = true } = {}) => {
            const categoryValue = categoryFilter.value;
            const searchValue = searchFilter.value.toLowerCase();

            this.filteredModels = modelsData.filter(model => {
                const categoryMatch = !categoryValue || model.category === categoryValue;
                const tagMatch = this.selectedTags.length === 0 ||
                    this.selectedTags.every(selectedTag => model.tags.includes(selectedTag));

                const searchMatch = !searchValue ||
                    model.title.toLowerCase().includes(searchValue);

                return categoryMatch && tagMatch && searchMatch;
            });

            await this.renderCatalog();
            this.updateResultsCount();
            if (updateURL) this.updateFilterURL();
        };

        categoryFilter.addEventListener('change', applyFilters);
        searchFilter.addEventListener('input', applyFilters);
        tagSearch.addEventListener('input', () => this.updateTagFilterOptions());
        tagFilterToggle.addEventListener('click', () => {
            const isOpen = !tagFilterPanel.hidden;
            tagFilterPanel.hidden = isOpen;
            tagFilterToggle.setAttribute('aria-expanded', String(!isOpen));
            if (!isOpen) tagSearch.focus();
        });
        document.addEventListener('click', (event) => {
            if (!tagFilter.contains(event.target)) {
                tagFilterPanel.hidden = true;
                tagFilterToggle.setAttribute('aria-expanded', 'false');
            }
        });

        clearButton.addEventListener('click', async () => {
            categoryFilter.value = '';
            searchFilter.value = '';
            this.selectedTags = [];
            this.updateSelectedTagsDisplay();
            this.updateTagFilterOptions();
            await applyFilters();
        });

        this.applyFilters = applyFilters;
    }

    setupTagFilter() {
        this.updateSelectedTagsDisplay();
        this.updateTagFilterOptions();
    }

    updateSelectedTagsDisplay() {
        const selectedTagsContainer = document.getElementById('selected-tags');

        if (this.selectedTags.length === 0) {
            selectedTagsContainer.innerHTML = '';
            return;
        }

        selectedTagsContainer.innerHTML = this.selectedTags.map(tag => `
            <div class="selected-tag">
                <span>${tag}</span>
                <span class="remove-tag" data-tag="${tag}">&times;</span>
            </div>
        `).join('');

        selectedTagsContainer.querySelectorAll('.remove-tag').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tagToRemove = e.target.dataset.tag;
                this.selectedTags = this.selectedTags.filter(tag => tag !== tagToRemove);
                this.updateSelectedTagsDisplay();
                this.updateTagFilterOptions();
                this.applyFilters();
            });
        });
    }

    updateTagFilterOptions() {
        const allTags = [...new Set(modelsData.flatMap(model => model.tags))].sort();
        const query = document.getElementById('tag-search').value.trim().toLocaleLowerCase('uk');
        const availableTags = allTags.filter(tag =>
            !this.selectedTags.includes(tag) && (!query || tag.toLocaleLowerCase('uk').includes(query))
        );

        const options = document.getElementById('tag-filter-options');
        options.innerHTML = availableTags.length
            ? availableTags.map(tag => `<button type="button" class="tag-combobox-option" role="option" data-tag="${tag}">${tag}</button>`).join('')
            : '<p class="tag-combobox-empty">Тегів не знайдено</p>';
        options.querySelectorAll('.tag-combobox-option').forEach(option => {
            option.addEventListener('click', async () => {
                const selectedTag = option.dataset.tag;
                if (!selectedTag || this.selectedTags.includes(selectedTag)) return;
                this.selectedTags.push(selectedTag);
                document.getElementById('tag-search').value = '';
                this.updateSelectedTagsDisplay();
                this.updateTagFilterOptions();
                document.getElementById('tag-filter-panel').hidden = true;
                document.getElementById('tag-filter-toggle').setAttribute('aria-expanded', 'false');
                await this.applyFilters();
            });
        });
    }

    updateResultsCount() {
        const countElement = document.getElementById('results-count');
        countElement.textContent = `Знайдено: ${this.filteredModels.length} моделей`;
    }

    // Оновлюємо setupModal для використання нового методу closeModal
    setupModal() {
        const modal = document.getElementById('model-modal');
        const closeBtn = document.querySelector('.close');

        closeBtn.addEventListener('click', () => {
            this.closeModal();
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal();
            }
        });

        // Додаємо обробник для клавіші Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                this.closeModal();
            }
        });
    }

    setupModalGallery(images) {
        const mainImage = document.getElementById('modal-main-image');
        const thumbnailStrip = document.querySelector('.thumbnail-strip');

        if (images && images.length > 0) {
            mainImage.onload = function() {
                console.log('Main image loaded successfully');
            };

            mainImage.onerror = function() {
                console.log('Failed to load main image');
                this.style.display = 'flex';
                this.innerHTML = '<div style="font-size: 3rem; color: #999;">📷</div>';
            };
            mainImage.src = images[0];

            thumbnailStrip.innerHTML = images.map((img, index) => `
                <div class="thumbnail ${index === 0 ? 'active' : ''}" data-image="${img}">
                    <img src="${img}" alt="Thumbnail ${index + 1}"
                         onerror="this.parentElement.style.opacity='0.5'">
                </div>
            `).join('');

            thumbnailStrip.querySelectorAll('.thumbnail').forEach(thumb => {
                thumb.addEventListener('click', () => {
                    const newImage = thumb.dataset.image;
                    mainImage.src = newImage;

                    thumbnailStrip.querySelectorAll('.thumbnail').forEach(t =>
                        t.classList.remove('active')
                    );
                    thumb.classList.add('active');
                });
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ModelsCatalog();
});
