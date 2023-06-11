export function showInstallPwaDialog() {
    const pwaInstall = document.getElementsByTagName('pwa-install')[0];
    // @ts-ignore
    if (pwaInstall.isInstallAvailable) {
        // @ts-ignore
        if (pwaInstall.isAppleMobilePlatform) {
            // @ts-ignore
            pwaInstall.isAppleMobilePlatform = true;
            // @ts-ignore
            pwaInstall.hideDialog();
            // @ts-ignore
            pwaInstall.showDialog(true);
            return;
        } else {
            // @ts-ignore
            pwaInstall.showDialog();
        }
    }
}
