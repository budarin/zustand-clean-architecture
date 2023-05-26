import { useTodoStore } from '../domain/store';
import { notifyError } from '../../services/notification';
import { delay } from '../../../common/utils/promises/delay';

export async function deleteTodo(todo: Todo) {
    const store = useTodoStore.getState();
    const oldValue = store.todos.byId[todo.todo_id];

    store._deleteTodo(todo.todo_id);

    // toast.info('Тодо обновлен', { autoClose: 1000 });

    await delay(3000);

    const todoTitle = todo.todo.length <= 10 ? todo.todo : todo.todo.slice(0, 10) + '...';
    notifyError(`Ошибка: не удалось удалить "${todoTitle}" - восстанавливаем`, {
        toastId: 'delete_todo' + todo.todo_id,
    });

    store._updateTodo(oldValue);
}
