import { delay } from '../../utils/promises/delay.ts';
import { useTodoStore } from '../../domain/store/store.tsx';
import { useNotification } from '../../services/adapters/useNotification.ts';

export async function createTodo(todo: NewTodo, isMountedRef: React.MutableRefObject<boolean>): Promise<void> {
    const store = useTodoStore.getState();

    try {
        // fetch
        await delay(3000);

        if (isMountedRef.current === false) {
            return;
        }

        const numbers = Object.keys(store.todos.byId).map(Number);

        const newTodoId = Math.max(...numbers) + 1;
        const newTodo = { ...todo, todo_id: newTodoId };

        store._addTodo(newTodo);
    } catch (error) {
        const notification = useNotification();

        notification.notifyError(`Ошибка: ${(error as Error).message}`, {
            toastId: 'create_todo_error' + todo.todo,
        });
    }
}
