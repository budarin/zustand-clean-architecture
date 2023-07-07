import { initApp } from './utils/app/initApp.tsx';
import { getLogger } from './services/adapters/getLogger.ts';
import { setupServiceWorker } from './utils/service-worker/setupServiceWorker.ts';

const logger = getLogger();

setupServiceWorker().then(initApp).catch(logger.error);
