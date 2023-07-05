export function isStandaloneMode(): boolean {
    return (
        window.matchMedia('(display-mode: standalone)').matches ||
        ('standalone' in navigator && navigator.standalone === true)
    );
}
