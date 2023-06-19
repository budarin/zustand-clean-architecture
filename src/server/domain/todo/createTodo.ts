import { validateTodoEntity } from './validateTodoEntity.ts';
import { respondWithError } from '../../utils/respondWithError.ts';
import { respondWithResult } from '../../utils/respondWithResult.ts';

export async function createTodo(request: Request, state: Entities): Promise<Response> {
    try {
        const data = await request.json();
        const { entity, error } = validateTodoEntity(data, state);

        if (error !== undefined) {
            return respondWithError(error);
        } else {
            const ids = state?.todos?.map((item) => item.todo_id) || [1];
            const newId = Math.max(...ids);
            const newTodo = { ...entity, todo_id: newId };

            state?.todos?.push(newTodo);

            return respondWithResult(newTodo);
        }
    } catch (error) {
        const { message, stack } = error as Error;

        return respondWithError(message, stack);
    }
}
