declare let self: ServiceWorkerGlobalScope;

export function handleInstall(): void {
    self.skipWaiting();
}
