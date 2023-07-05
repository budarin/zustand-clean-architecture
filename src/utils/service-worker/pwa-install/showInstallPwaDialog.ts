// @ts-nocheck
export function showInstallPwaDialog(): void {
    const pwaInstall = document.getElementsByTagName('pwa-install')[0];

    if (pwaInstall && pwaInstall.isInstallAvailable) {
        if (pwaInstall.isAppleMobilePlatform) {
            pwaInstall.isAppleMobilePlatform = true;
            pwaInstall.hideDialog();
            pwaInstall.showDialog(true);
        } else {
            pwaInstall.showDialog();
        }
    }
}
