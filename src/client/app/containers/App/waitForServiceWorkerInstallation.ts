export const waitForServiceWorkerInstallation = (): Promise<void> => {
    return navigator.serviceWorker.ready.then(() => {
        console.log('sw установлен');
    });
};
