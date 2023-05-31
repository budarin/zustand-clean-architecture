export function cleanHtml(KVStorageRemove: (key: string) => void): void {
    if (window.scriptLoadError) {
        window.removeEventListener('error', window.scriptLoadError);
        window.scriptLoadError = undefined;
    }

    KVStorageRemove('reloadOnError');

    document.getElementById('initialScript')?.remove();
}
