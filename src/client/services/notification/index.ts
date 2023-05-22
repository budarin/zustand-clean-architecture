import { toast } from 'react-toastify';

import sound from '../../../../assets/error.mp3';
import { delay } from '../../../common/promises/delay';

const lineHeight = 1.45;

const au = new Audio(sound);
au.volume = 0.25;

function onClose() {
    au.pause();
}
function onOpen() {
    delay(250).then(() => {
        if (window.matchMedia('(hover: none) and (pointer: coarse)').matches === true && 'vibrate' in navigator) {
            window.navigator.vibrate(10);
        } else {
            au.play();
        }
    });
}

export const notifyError: typeof toast.error = (content, options?) => {
    return toast.error(content, {
        ...options,
        onOpen,
        onClose,
        autoClose: false,
        style: { border: '2px solid var(--toastify-color-error)', lineHeight },
    });
};

export const notifyInfo: typeof toast.info = (content, options?) => {
    return toast.info(content, {
        ...options,
        style: { border: '2px solid var(--toastify-color-info)', lineHeight },
    });
};

export const notifyWarning: typeof toast.warning = (content, options?) => {
    return toast.warning(content, {
        ...options,
        style: { border: '2px solid var(--toastify-color-warning)', lineHeight },
    });
};

function onJoyfullyOpen() {
    delay(250).then(() => {
        if (window.matchMedia('(hover: none) and (pointer: coarse)').matches === true && 'vibrate' in navigator) {
            window.navigator.vibrate([100, 30, 100, 30, 100]);
        }
        au.play();
    });
}
export const joyfullyGilling: typeof toast.warning = (content, options?) => {
    return toast.success(content, {
        ...options,
        style: { border: '2px solid var(--secondaryColor)', lineHeight },
        autoClose: false,
        onOpen: onJoyfullyOpen,
    });
};
