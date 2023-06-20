import { handleFetchEvent } from './utils/handleFetchEvent.ts';
import { handleActivate } from './utils/handleActivate.ts';
import { swOnError } from './utils/swOnError.ts';
import { handleInstall } from './utils/handleInstall.ts';

export declare var self: ServiceWorkerGlobalScope & typeof globalThis & { VERSION: string };

self.VERSION = '1.0.0';

self.onerror = swOnError;
self.addEventListener('install', handleInstall);
self.addEventListener('activate', handleActivate);
self.addEventListener('fetch', handleFetchEvent);
