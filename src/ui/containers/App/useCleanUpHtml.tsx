import { useEffect } from 'react';

export function useCleanUpHtml() {
    useEffect(() => {
        let mounted = true;

        if (mounted) {
            if (window.scriptLoadError) {
                window.removeEventListener('error', window.scriptLoadError);
                window.scriptLoadError = undefined;
            }

            document.querySelector('#loading')?.remove();
            document.getElementById('initialScript')?.remove();
            document.querySelector('#root')?.classList.remove('hidden');
        }

        return () => {
            mounted = false;
        };
    }, []);
}
