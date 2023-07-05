export function cleanUpHtml(): void {
    performance.mark('cleanUpHtml_start');

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

    document.querySelector('#loading')?.remove();
    document.getElementById('initialScript')?.remove();
    document.querySelector('#root')?.classList.remove('hidden');

    performance.mark('cleanUpHtml_end');
}
