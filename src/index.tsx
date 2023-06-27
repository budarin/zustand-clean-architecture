import { initApp } from './utils/app/initApp.tsx';
import { setUpPwaInstall } from './utils/service-worker/pwa-install/setUpPwaInstall.ts';
import { setupServiceWorker } from './utils/service-worker/setupServiceWorker.ts';

setupServiceWorker().then(initApp);

if ('BeforeInstallPromptEvent' in window) {
    window.addEventListener('beforeinstallprompt', setUpPwaInstall);
}
