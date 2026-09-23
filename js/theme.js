(() => {
    const key = 'black-olive-theme';
    const controls = document.querySelectorAll('[data-theme-toggle]');
    const apply = (theme) => {
        document.documentElement.dataset.theme = theme;
        controls.forEach((control) => {
            const isDark = theme === 'dark';
            control.setAttribute('aria-pressed', String(isDark));
            control.setAttribute('aria-label', isDark ? 'Світла тема' : 'Темна тема');
            control.setAttribute('title', isDark ? 'Світла тема' : 'Темна тема');
            control.innerHTML = `<i class="fa-solid fa-${isDark ? 'sun' : 'moon'}"></i><span>${isDark ? 'Світла тема' : 'Темна тема'}</span>`;
        });
    };
    let theme = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
    apply(theme);
    controls.forEach((control) => control.addEventListener('click', () => {
        theme = theme === 'dark' ? 'light' : 'dark';
        try { localStorage.setItem(key, theme); } catch (_) { /* local storage unavailable */ }
        apply(theme);
    }));
})();
