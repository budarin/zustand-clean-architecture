import * as kvStorage from '../../infrastructure/services/KVStorage/index.ts';

export function cleanHtml(): void {
    if (window.scriptLoadError) {
        window.removeEventListener('error', window.scriptLoadError);
        window.scriptLoadError = undefined;
    }

    kvStorage.remove('reloadOnError');

    document.getElementById('initialScript')?.remove();
}
