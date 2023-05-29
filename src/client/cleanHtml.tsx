import { remove } from './services/KVStorage/index.ts';

export function cleanHtml(): void {
    // очищаем html и localStorage
    if (window.scriptLoadError) {
        window.removeEventListener('error', window.scriptLoadError);
        window.scriptLoadError = undefined;
    }
    remove('reloadOnError');
    document.getElementById('initialScript')?.remove();
}
