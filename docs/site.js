/* Shiesuta site — theme persistence for daisyUI theme-controller */
(() => {
    const root = document.documentElement;
    const current = root.dataset.theme || 'light';

    document.querySelectorAll('.theme-controller').forEach((input) => {
        input.checked = input.value === current;
        input.addEventListener('change', () => {
            if (!input.checked) return;
            root.dataset.theme = input.value;
            try {
                localStorage.setItem('theme', input.value);
            } catch {
                /* private mode — ignore */
            }
        });
    });
})();
