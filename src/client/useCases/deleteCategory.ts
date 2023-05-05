import { toast } from 'react-toastify';

import { useTodoStore } from '../domain/store.ts';
import { _deleteCategory } from '../domain/entities/category/actions.ts';

export function deleteCategory(id: Category['id']) {
    return useTodoStore.setState((state) => {
        toast.info('Категория успешно удалена', { autoClose: 2000 });

        _deleteCategory(id);
        return state;
    });
}
