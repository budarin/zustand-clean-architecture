import { toast } from 'react-toastify';

import sound from '../../../../assets/error.mp3';
import { delay } from '../../../common/promises/delay';

const au = new Audio(sound);
au.volume = 0.25;

export const notifyError: typeof toast.error = (content, options?) => {
    return toast.error(content, {
        ...options,
        autoClose: false,
        style: { border: '2px solid var(--toastify-color-error)' },
        onOpen: () => {
            delay(250).then(() => {
                if (
                    window.matchMedia('(hover: none) and (pointer: coarse)').matches === true &&
                    'vibrate' in navigator
                ) {
                    window.navigator.vibrate(10);
                } else {
                    au.play();
                }
            });
        },
        onClose: () => {
            au.pause();
        },
    });
};

export const notifyInfo: typeof toast.info = (content, options?) => {
    return toast.info(content, { ...options, style: { border: '2px solid var(--toastify-color-info)' } });
};

export const notifyWarning: typeof toast.warning = (content, options?) => {
    return toast.warning(content, { ...options, style: { border: '2px solid var(--toastify-color-warning)' } });
};
