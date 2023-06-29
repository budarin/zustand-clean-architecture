import { isAppleMobile } from '../browsers/isAppleMobile.ts';
import { setUpPwaInstall } from './pwa-install/setUpPwaInstall.ts';
import { isStandaloneMode } from './pwa-install/isStandaloneMode.ts';

export async function setupServiceWorker() {
    if ('serviceWorker' in navigator) {
        if (!navigator.serviceWorker.controller) {
            await new Promise((resolve) => {
                navigator.serviceWorker.addEventListener('controllerchange', resolve);
            });
        } else {
            const registration = await navigator.serviceWorker.ready;
            registration.update();

            await new Promise((resolve) => {
                const waitingServiceWorker = registration.waiting;

                if (waitingServiceWorker) {
                    const onStateChange = () => {
                        if (waitingServiceWorker.state === 'activated') {
                            registration.removeEventListener('statechange', onStateChange);
                            resolve(true);
                        }
                    };
                    registration.addEventListener('statechange', onStateChange);
                } else {
                    resolve(true);
                }
            });
        }

        // В FireFox и десктопный Safari вообще не поддерживают pwa - игнорируем их
        // в тех браузерах где есть BeforeInstallPromptEvent событие - подписываемся на него
        if ('BeforeInstallPromptEvent' in window) {
            window.addEventListener('beforeinstallprompt', setUpPwaInstall);
        } else {
            // В Safari на iOS нет пока события 'beforeInstallPromptEvent', но у него можно добавить ярлык на экран
            // и это будет полноценное pwa приложение - поэтому будем показывать юзеру диалог с инструкциями
            if ('serviceWorker' in navigator && isAppleMobile() && isStandaloneMode() === false) {
                setTimeout(setUpPwaInstall, 3000);
            }
        }
    }
}
