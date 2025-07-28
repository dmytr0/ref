// js/main.js - простий і робочий код
class ModelsCatalog {
    constructor() {
        this.filteredModels = [...modelsData];
        this.selectedTags = []; // Додаємо масив обраних тегів
        // Додаємо невелику затримку щоб marked точно завантажився
        setTimeout(() => {
            this.init();
        }, 100);
    }

    init() {
        console.log('Marked available:', typeof marked); // Для дебагу
        this.renderCatalog();
        this.setupFilters();
        this.setupModal();
        this.updateResultsCount();
    }

    parseMarkdown(text) {
        console.log('Parsing markdown:', text.substring(0, 50));

        if (typeof marked === 'undefined') {
            console.error('Marked не завантажений!');
            return text;
        }

        try {
            console.log('Original text for parsing:', text.substring(0, 100));

            if (typeof marked.parse === 'function') {
                return marked.parse(text);
            } else if (typeof marked === 'function') {
                return marked(text);
            } else {
                console.error('Marked не є функцією!');
                return text;
            }
        } catch (error) {
            console.error('Помилка парсингу:', error);
            return text;
        }
    }

    getShortDescription(markdown) {
        console.log('Getting short description for:', markdown.substring(0, 30)); // Для дебагу

        // Спершу парсимо markdown
        const htmlContent = this.parseMarkdown(markdown);
        console.log('Parsed HTML:', htmlContent.substring(0, 100)); // Для дебагу

        // Створюємо тимчасовий div для витягування тексту
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlContent;

        // Витягуємо текст з перших елементів
        const allText = tempDiv.textContent || tempDiv.innerText || '';

        // Прибираємо заголовки та беремо перші 150 символів
        const lines = allText.split('\n').filter(line => line.trim());
        const description = lines.find(line => !line.startsWith('#') && line.trim()) || lines[0] || 'Опис відсутній';

        return description.length > 150 ? description.substring(0, 150) + '...' : description;
    }

    renderModelsGrid(models) {
        return models.map(model => {
            const shortDesc = this.getShortDescription(model.description);
            console.log('Short desc for', model.title, ':', shortDesc); // Для дебагу

            return `
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
            `;
        }).join('');
    }

    openModal(modelId) {
        const model = modelsData.find(m => m.id === modelId);
        if (!model) return;

        console.log('Opening modal for:', model.title); // Для дебагу
        console.log('Description:', model.description); // Для дебагу

        const modal = document.getElementById('model-modal');

        document.getElementById('modal-title').textContent = model.title;
        document.getElementById('modal-category').innerHTML =
            `<span class="model-category">${CATEGORIES[model.category]}</span>`;
        document.getElementById('modal-tags').innerHTML =
            model.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        // Парсимо markdown
        const parsedDescription = this.parseMarkdown(model.description);
        console.log('Parsed description:', parsedDescription); // Для дебагу

        document.getElementById('modal-description').innerHTML = parsedDescription;

        this.setupModalGallery(model.images);
        document.getElementById('modal-download').href = model.downloadUrl;

        modal.style.display = 'block';
    }

    renderCatalog() {
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

        catalogContent.innerHTML = Object.entries(CATEGORIES).map(([categoryId, categoryName]) => {
            const categoryModels = groupedModels[categoryId] || [];
            const categoryIcon = this.getCategoryIcon(categoryId);

            return `
                <div class="category-section ${categoryModels.length === 0 ? 'empty' : ''}">
                    <div class="category-header">
                        <span class="category-icon">${categoryIcon}</span>
                        <span>${categoryName}</span>
                        <span class="category-count">(${categoryModels.length})</span>
                    </div>
                    <div class="category-models">
                        ${categoryModels.length > 0 ? 
                            `<div class="models-grid">${this.renderModelsGrid(categoryModels)}</div>` :
                            `<div class="empty-category-message">Поки що немає моделей в цій категорії</div>`
                        }
                    </div>
                </div>
            `;
        }).join('');

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
            'fpv-antenna-mounts': '📡',
            'fpv-gimbals': '🎥',
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
        const searchFilter = document.getElementById('search-filter');
        const clearButton = document.getElementById('clear-filters');

        // Створюємо dropdown для тегів
        this.setupTagFilter();

        const applyFilters = () => {
            const categoryValue = categoryFilter.value;
            const searchValue = searchFilter.value.toLowerCase();
            this.filteredModels = modelsData.filter(model => {
                const categoryMatch = !categoryValue || model.category === categoryValue;

                // Перевіряємо чи модель містить ВСІ обрані теги
                const tagMatch = this.selectedTags.length === 0 ||
                    this.selectedTags.every(selectedTag => model.tags.includes(selectedTag));

                const searchMatch = !searchValue ||
                    model.title.toLowerCase().includes(searchValue) ||
                    model.description.toLowerCase().includes(searchValue);

                return categoryMatch && tagMatch && searchMatch;
            });

            this.renderCatalog();
            this.updateResultsCount();
        };

        categoryFilter.addEventListener('change', applyFilters);
        searchFilter.addEventListener('input', applyFilters);

        // Обробник для select тегів
        tagFilter.addEventListener('change', (e) => {
            const selectedTag = e.target.value;
            if (selectedTag && !this.selectedTags.includes(selectedTag)) {
                this.selectedTags.push(selectedTag);
                this.updateSelectedTagsDisplay();
                this.updateTagFilterOptions();
                applyFilters();
            }
            e.target.value = ''; // Скидаємо select
        });

        clearButton.addEventListener('click', () => {
            categoryFilter.value = '';
            searchFilter.value = '';
            this.selectedTags = [];
            this.updateSelectedTagsDisplay();
            this.updateTagFilterOptions();
            this.filteredModels = [...modelsData];
            this.renderCatalog();
            this.updateResultsCount();
        });

        // Зберігаємо посилання на applyFilters для використання в інших методах
        this.applyFilters = applyFilters;
    }

    setupTagFilter() {
        const allTags = [...new Set(modelsData.flatMap(model => model.tags))].sort();

        const tagSelect = document.getElementById('tag-filter');
        tagSelect.innerHTML = `
            <option value="">Оберіть тег...</option>
            ${allTags.map(tag => `<option value="${tag}">${tag}</option>`).join('')}
        `;

        this.updateSelectedTagsDisplay();
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

        // Додаємо обробники для видалення тегів
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
        const availableTags = allTags.filter(tag => !this.selectedTags.includes(tag));

        const tagSelect = document.getElementById('tag-filter');
        tagSelect.innerHTML = `
            <option value="">Оберіть тег...</option>
            ${availableTags.map(tag => `<option value="${tag}">${tag}</option>`).join('')}
        `;
    }

    updateResultsCount() {
        const countElement = document.getElementById('results-count');
        countElement.textContent = `Знайдено: ${this.filteredModels.length} моделей`;
    }

    setupModal() {
        const modal = document.getElementById('model-modal');
        const closeBtn = document.querySelector('.close');

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    setupModalGallery(images) {
        const mainImage = document.getElementById('modal-main-image');
        const thumbnailStrip = document.querySelector('.thumbnail-strip');

        if (images && images.length > 0) {
            // Додаємо обробник завантаження для головної картинки
            mainImage.onload = function() {
                // Картинка завантажилась успішно
                console.log('Main image loaded successfully');
            };

            mainImage.onerror = function() {
                // Якщо картинка не завантажилась
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