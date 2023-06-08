import * as notification from '../../infrastructure/services/Notification/index.ts';

import { useTodoStore } from '../../domain/store/store.tsx';
import { delay } from '../../utils/promises/delay.ts';

export async function createTodo(todo: NewTodo): Promise<void> {
    const store = useTodoStore.getState();

    try {
        // fetch
        await delay(3000);

        const numbers = Object.keys(store.todos.byId).map(Number);

        const newTodoId = Math.max(...numbers) + 1;
        const newTodo = { ...todo, todo_id: newTodoId };

        store._createTodo(newTodo);
    } catch (error) {
        notification.notifyError(`Ошибка: ${(error as Error).message}`, {
            toastId: 'create_todo_error' + todo.todo,
        });
    }
}
