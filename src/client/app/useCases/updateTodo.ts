import { toast } from 'react-toastify';

import { useTodoStore } from '../domain/store';
import { delay } from '../../../common/promises/delay';

const updatingTodos = new Set();

export async function updateTodo(todo: Todo) {
    updatingTodos.add(todo.id);

    const store = useTodoStore.getState();
    const oldValue = store.todos.byId[todo.id];

    if (!oldValue) {
        toast.error('Запись отсутствует в базе данных!', {
            autoClose: 2000,
        });
        return;
    }

    store._updateTodo(todo);

    // toast.info('Тодо обновлен', { autoClose: 1000 });

    await delay(3000);

    toast.error(`${todo.id}: Упс! вышла ошибочка - восстанавливаем`, {
        toastId: 'server_error_todo' + todo.id,
    });

    store._updateTodo(oldValue);

    updatingTodos.delete(todo.id);
}
