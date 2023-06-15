import { initApp } from './utils/app/initApp.tsx';
import { useLogger } from './services/adapters/useLogger.ts';
import { setUpPwaInstall } from './utils/pwa-install/setUpPwaInstall.ts';

const logger = useLogger();

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

if ('BeforeInstallPromptEvent' in window) {
    window.addEventListener('beforeinstallprompt', setUpPwaInstall);
}
