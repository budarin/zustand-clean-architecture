import { getState } from '../state.ts';
import { validateTodo } from './validateTodo.ts';
import { respondWithError } from '../../utils/respondWithError.ts';
import { respondWithResult } from '../../utils/respondWithResult.ts';

export async function createTodo(request: Request): Promise<TypedResponse<JsonRpc<NewTodo, string | undefined>>> {
    try {
        const state = getState();
        const data = await request.json();
        const { entity, error } = validateTodo(data, state, 'create');

        if (entity) {
            const ids = state.todos.map((item) => item.todo_id) || [1];
            const newId = Math.max(...ids) + 1;
            const newTodo = {
                ...entity,
                todo_id: newId,
            };

            state.todos.push(newTodo);

            return respondWithResult(newTodo);
        } else {
            return respondWithError(error);
        }
    } catch (error) {
        const { message, stack } = error as Error;

        return respondWithError(message, stack);
    }
}
