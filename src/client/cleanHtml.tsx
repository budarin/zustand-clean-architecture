export function cleanHtml(): void {
    // очищаем html и localStorage
    if (window.scriptLoadError) {
        window.removeEventListener('error', window.scriptLoadError);
        window.scriptLoadError = undefined;
    }
    localStorage.removeItem('reloadOnError');
    document.getElementById('initialScript')?.remove();
}
