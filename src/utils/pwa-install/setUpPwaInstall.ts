export function setUpPwaInstall() {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://cdn.jsdelivr.net/gh/khmyznikov/pwa-install@latest/dist/pwa-install.bundle.js';

    const pwaInstall = document.createElement('pwa-install');
    pwaInstall.id = 'pwa-install';
    pwaInstall.setAttribute('manifest-url', 'manifest.json');
    pwaInstall.setAttribute('manual-apple', 'true');
    pwaInstall.setAttribute('manual-chrome', 'true');

    document.body.appendChild(script);
    document.body.appendChild(pwaInstall);
}
