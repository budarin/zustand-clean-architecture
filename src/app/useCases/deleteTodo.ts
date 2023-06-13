import { delay } from '../../utils/promises/delay.ts';
import { useTodoStore } from '../../domain/store/store.tsx';
import { useNotification } from '../serviceAdapters/useNotification.ts';

const notification = useNotification();

export async function deleteTodo(todo: Todo): Promise<void> {
    const store = useTodoStore.getState();
    const oldValue = store.todos.byId[todo.todo_id];

    store._deleteTodo(todo.todo_id);

    // toast.info('Тодо обновлен', { autoClose: 1000 });

    await delay(3000);

    const todoTitle = todo.todo.length <= 10 ? todo.todo : todo.todo.slice(0, 10) + '...';

    notification.notifyError(`Ошибка: не удалось удалить "${todoTitle}" - восстанавливаем`, {
        toastId: 'delete_todo' + todo.todo_id,
    });

    store._updateTodo(oldValue);
}
