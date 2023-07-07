import Toastify, { toast } from 'react-toastify';

import sound from './error.mp3';
import { delay } from '../../../utils/promises/delay.ts';
import { logger } from '../../../server/services/logger.ts';

export type NotificationMethod = <TData = unknown>(
    content: Toastify.ToastContent<TData>,
    options?: Toastify.ToastOptions<UnknownObject> | undefined,
) => number | string;

const lineHeight = 1.45;
const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches === true;
const isTouchWithVibration = isTouchDevice && 'vibrate' in navigator;

const au = new Audio(sound);
au.volume = 0.25;

function onPlaySoundError(error: unknown): void {
    if (!(error instanceof DOMException && error.name === 'NotAllowedError')) {
        logger.error({ message: 'Ошибка воспроизведения звука', error });
    }
}

export const vibrate = (vibrations = [5]): void => {
    if (isTouchWithVibration) {
        window.navigator.vibrate(vibrations);
    }
};

function onClose(): void {
    au.pause();
}

function onOpen(): void {
    delay(250).then(() => {
        if (isTouchWithVibration) {
            vibrate();
        } else {
            au.play().catch(onPlaySoundError);
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

export const notifyInfo: NotificationMethod = (content, options?) => {
    return toast.info(content, {
        ...options,
        style: { border: '2px solid var(--toastify-color-info)', lineHeight },
    });
};

export const notifyWarning: NotificationMethod = (content, options?) => {
    return toast.warning(content, {
        ...options,
        style: { border: '2px solid var(--toastify-color-warning)', lineHeight },
    });
};

function onJoyfullyOpen(): void {
    delay(250).then(() => {
        au.play().catch(onPlaySoundError);
        vibrate([100, 30, 100, 30, 100]);
    });
}

export const joyfullyGilling: NotificationMethod = (content, options?) => {
    return toast.success(content, {
        ...options,
        style: { border: '2px solid var(--primaryDarkColor)', lineHeight },
        autoClose: false,
        onOpen: onJoyfullyOpen,
    });
};
