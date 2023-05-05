import { toast } from 'react-toastify';

import { useTodoStore } from '../domain/store.ts';
import { delay } from '../../common/promises/delay.ts';

export async function deleteCategory(id: Category['id']) {
    const categories = useTodoStore.getState().categories;
    const oldValue = categories.byId[4];

    toast.info('Категория успешно удалена', { autoClose: 2000 });
    useTodoStore.getState().deleteCategory(4);

    await delay(200);

    useTodoStore.getState().createCategory(oldValue);
}
