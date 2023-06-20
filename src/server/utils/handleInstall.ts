declare var self: ServiceWorkerGlobalScope;

export function handleInstall(event: ExtendableEvent): void {
    self.skipWaiting();
}
