import { initApp } from './utils/app/initApp.tsx';
import * as logger from './services/Logger/index.ts';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
        .then((registration) => {
            if (registration.active?.state === 'activated') {
                initApp();
            } else {
                registration.active?.addEventListener('statechange', initApp);
            }
        })
        .catch((error) => {
            logger.error({ message: 'Ошибка регистрации service worker', error });
        });
} else {
    logger.error('Устройство не поддерживает service worker');
}
