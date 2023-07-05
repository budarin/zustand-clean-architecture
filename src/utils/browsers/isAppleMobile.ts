export const isAppleMobile = (): boolean | 0 | null => {
    return (
        ['iPhone', 'iPad', 'iPod'].includes(navigator.userAgent) ||
        (navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2)
    );
};
