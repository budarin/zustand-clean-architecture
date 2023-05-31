import { notification } from '../ports/notification.ts';

import { useTodoStore } from '../entities/store.tsx';
import { delay } from '../../../common/utils/promises/delay.ts';

export async function createTodo(todo: NewTodo): Promise<void> {
    const store = useTodoStore.getState();

    try {
        // fetch
        await delay(3000);

        const numbers = Object.keys(store.todos.byId).map(Number);

        const newTodoId = Math.max(...numbers) + 1;
        const newTodo = { ...todo, todo_id: newTodoId };

        store._addTodo(newTodo);
    } catch (error) {
        notification.notifyError(`Ошибка: ${(error as Error).message}`, {
            toastId: 'create_todo_error' + todo.todo,
        });
    }
}
