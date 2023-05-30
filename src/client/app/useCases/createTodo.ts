import { type NotificationMethod } from '../../services/Notification/index.ts';

import { useTodoStore } from '../domain/store';
import { delay } from '../../../common/utils/promises/delay';

export async function createTodo(todo: NewTodo, notifyError: NotificationMethod): Promise<void> {
    const store = useTodoStore.getState();

    try {
        // fetch
        await delay(3000);

        const numbers = Object.keys(store.todos.byId).map(Number);

        const newTodoId = Math.max(...numbers) + 1;
        const newTodo = { ...todo, todo_id: newTodoId };

        store._addTodo(newTodo);
    } catch (error) {
        notifyError(`Ошибка: ${(error as Error).message}`, {
            toastId: 'create_todo_error' + todo.todo,
        });
    }
}
