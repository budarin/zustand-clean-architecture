import { initApp } from './utils/app/initApp.tsx';
import { setupServiceWorker } from './utils/service-worker/setupServiceWorker.ts';

setupServiceWorker().then(initApp);
