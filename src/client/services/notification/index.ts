import { toast } from 'react-toastify';

import sound from '../../../../assets/error.mp3';
import { delay } from '../../../common/promises/delay';

const au = new Audio(sound);
au.volume = 0.25;

export const notifyError: typeof toast.error = (content, options?) => {
    return toast.error(content, {
        ...options,
        onOpen: () => {
            delay(300).then(() => {
                au.play();
            });
        },
        onClose: () => {
            au.pause();
        },
    });
};

export const notifyInfo: typeof toast.info = (content, options?) => {
    return toast.error(content, options);
};

export const notifyWarning: typeof toast.warning = (content, options?) => {
    return toast.error(content, options);
};
