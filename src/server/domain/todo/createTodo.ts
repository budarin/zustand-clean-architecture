import { validateTodoEntity } from './validateTodoEntity.ts';
import { responseWithError } from '../../utils/responseWithError.ts';
import { responseWithResult } from '../../utils/responseWithResult.ts';

export async function createTodo(request: Request, state: Entities) {
    try {
        const data = await request.json();
        const { entity, error } = validateTodoEntity(data, state);

        if (error !== undefined) {
            responseWithError(error);
        } else {
            const ids = state?.todos?.map((item) => item.todo_id) || [1];
            const newId = Math.max(...ids);
            const newTodo = { ...entity, todo_id: newId };

            state?.todos?.push(newTodo);

            return responseWithResult(newTodo);
        }
    } catch (error) {
        const { message, stack } = error as Error;

        return responseWithError(message, stack);
    }
}
