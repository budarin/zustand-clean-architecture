import { toast } from 'react-toastify';

import { useTodoStore } from '../domain/store';
import { delay } from '../../../common/promises/delay';

import sound from '../../../../assets/plucky.mp3';

const au = new Audio(sound);
au.volume = 0.25;

export async function deleteCategory(id: Category['id']) {
    const store = useTodoStore.getState();
    const oldValue = store.categories.byId[id];

    if (!oldValue) {
        toast.error('Запись отсутствует в базе данных!', { autoClose: 2000 });
        return;
    }

    try {
        store._deleteCategory(id);
        await delay(3000);
        toast.error('Упс! вышла ошибочка - восстанавливаем', { autoClose: 2000 });
        store._createCategory(oldValue);
    } catch (err) {
        // console.log('error', err);
        toast.error((err as Error).message, {
            onOpen: () => {
                delay(300).then(() => {
                    au.play();
                });
            },
            onClose: () => {
                au.pause();
            },
        });
    }

    // toast.info('Категория успешно удалена', { autoClose: 1000 });
}
