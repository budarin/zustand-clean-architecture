import { useTodoStore } from '../domain/store';
import { delay } from '../../../common/promises/delay';
import { notifyError } from '../../services/notification';

export async function deleteTodo(todo: Todo) {
    const store = useTodoStore.getState();
    const oldValue = store.todos.byId[todo.todo_id];

    store._deleteTodo(todo.todo_id);

    // toast.info('Тодо обновлен', { autoClose: 1000 });

    await delay(3000);

    notifyError(
        `Ошибка: не удалось удалить "${
            todo.todo.length <= 10 ? todo.todo : todo.todo.slice(0, 10) + '...'
        }" - восстанавливаем`,
        {
            toastId: 'delete_todo' + todo.todo_id,
        },
    );

    store._updateTodo(oldValue);
}
