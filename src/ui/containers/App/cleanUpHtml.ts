export function cleanUpHtml() {
    if (window.scriptLoadError) {
        window.removeEventListener('error', window.scriptLoadError);
        window.scriptLoadError = undefined;
    }

    document.querySelector('#loading')?.remove();
    document.getElementById('initialScript')?.remove();
    document.querySelector('#root')?.classList.remove('hidden');
}
