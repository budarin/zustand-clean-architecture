import { setUpPwaInstall } from './pwa-install/setUpPwaInstall.ts';

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

        if ('BeforeInstallPromptEvent' in window) {
            window.addEventListener('beforeinstallprompt', setUpPwaInstall);
        }
    }
}
