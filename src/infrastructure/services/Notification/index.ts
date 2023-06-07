import Toastify, { toast } from 'react-toastify';

import sound from './error.mp3';
import { delay } from '../../../../src_old/common/utils/promises/delay';

export type NotificationMethod = <TData = unknown>(
    content: Toastify.ToastContent<TData>,
    options?: Toastify.ToastOptions<{}> | undefined,
) => number | string;

const lineHeight = 1.45;
const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches === true;
const isTouchWithVibration = isTouchDevice && 'vibrate' in navigator;

const au = new Audio(sound);
au.volume = 0.25;

export const vibrate = (vibrations = [5]) => {
    if (isTouchWithVibration) {
        window.navigator.vibrate(vibrations);
    }
};

function onClose() {
    au.pause();
}

function onOpen() {
    delay(250).then(() => {
        if (isTouchWithVibration) {
            vibrate();
        } else {
            au.play();
        }
    });
}

export const notifyError: NotificationMethod = (content, options?) => {
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
        au.play();
        vibrate([100, 30, 100, 30, 100]);
    });
}

export const joyfullyGilling: typeof toast.warning = (content, options?) => {
    return toast.success(content, {
        ...options,
        style: { border: '2px solid var(--primaryDarkColor)', lineHeight },
        autoClose: false,
        onOpen: onJoyfullyOpen,
    });
};
