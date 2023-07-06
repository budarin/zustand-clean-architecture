const selectors = ['#loading-styles', '#loading', '#initialScript'];

export function cleanUpHtml(): void {
    if (window.scriptLoadError) {
        window.removeEventListener('error', window.scriptLoadError);
        window.scriptLoadError = undefined;
    }

    if (window._timers) {
        window._timers.forEach((timer) => {
            clearTimeout(timer);
        });

        window._timers.length = 0;
    }

    selectors.forEach((selector) => document.querySelector(selector)?.remove());
    document.querySelector('#root')?.classList.remove('hidden');
}
