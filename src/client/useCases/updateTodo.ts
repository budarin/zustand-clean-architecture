import { toast } from 'react-toastify';

import { useTodoStore } from '../domain/store.ts';
import { _updateTodo } from '../domain/entities/todo/actions.ts';

export function updateTodo(todo: Todo) {
    return useTodoStore.setState((state) => {
        //toast.info('Категория успешно удалена', { autoClose: 2000 });

        _updateTodo(todo);
        return state;
    });
}
