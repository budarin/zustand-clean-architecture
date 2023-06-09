import { delay } from '../../utils/promises/delay.ts';
import { useTodoStore } from '../../domain/store/store.tsx';
import { getNotification } from '../../services/adapters/getNotification.ts';

const notification = getNotification();

export async function createTodo(todo: UnknownObject, isMountedRef: React.MutableRefObject<boolean>): Promise<void> {
    if (!isMountedRef.current) {
        return;
    }

    const store = useTodoStore.getState();

    try {
        // fetch
        await delay(3000);

        if (!isMountedRef.current) {
            return;
        }

        const numbers = Object.keys(store.todos.byId).map(Number);

        const newTodoId = Math.max(...numbers) + 1;
        const newTodo = { ...todo, todo_id: newTodoId };

        store.addTodo(newTodo);
    } catch (error) {
        notification.notifyError(`Ошибка: ${(error as Error).message}`, {
            toastId: 'create_todo_error' + todo.todo,
        });
    }
}
