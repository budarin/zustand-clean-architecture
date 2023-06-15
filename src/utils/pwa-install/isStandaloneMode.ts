export function isStandaloneMode() {
    return (
        window.matchMedia('(display-mode: standalone)').matches ||
        ('standalone' in navigator && (navigator as any).standalone === true)
    );
}
