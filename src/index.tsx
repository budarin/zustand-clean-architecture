import { InitApp } from './InitApp.tsx';
import '../src_old/client/importSiteIcons.ts';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
        if (!registration) {
            return;
        }

        if (registration.active?.state === 'activated') {
            InitApp();
        } else {
            registration.active?.addEventListener('statechange', () => {
                InitApp();
            });
        }
    });
}
