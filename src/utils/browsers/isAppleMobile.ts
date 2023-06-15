export const isAppleMobile = () =>
    ['iPhone', 'iPad', 'iPod'].includes(navigator.userAgent) ||
    (navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
