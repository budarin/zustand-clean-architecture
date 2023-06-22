import { initApp } from './utils/app/initApp.tsx';
import { setUpPwaInstall } from './utils/service-worker/pwa-install/setUpPwaInstall.ts';
import { handleSetupServiceWorker } from './utils/service-worker/handleSetupServiceWorker.ts';

handleSetupServiceWorker().then(initApp);

if ('BeforeInstallPromptEvent' in window) {
    window.addEventListener('beforeinstallprompt', setUpPwaInstall);
}
