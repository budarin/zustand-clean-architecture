import { InitApp } from './InitApp.tsx';
import * as logger from '../src_old/client/services/Logger/index.ts';

import '../src_old/client/importSiteIcons.ts';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
        .then((registration) => {
            if (registration.active?.state === 'activated') {
                InitApp();
            } else {
                registration.active?.addEventListener('statechange', () => {
                    InitApp();
                });
            }
        })
        .catch((error) => {
            logger.error({ message: 'Ошибка регистрации service worker', error });
        });
} else {
    logger.error('Устройство не поддерживает service worker');
}
