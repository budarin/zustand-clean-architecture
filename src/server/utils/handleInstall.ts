declare var self: ServiceWorkerGlobalScope & typeof globalThis & { VERSION: string };

export function handleInstall(event: ExtendableEvent): void {
    self.skipWaiting();
}
