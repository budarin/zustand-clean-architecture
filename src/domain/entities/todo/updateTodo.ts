import { useTodoStore } from '../../store/store';
import { validateTodoEntity } from './validation';
import { getOnlyDateTimestamp } from '../../../utils/dateTime/getOnlyDateTimestamp';
import { updateTodoCategories } from './filters/updateTodoCategories';
import { updateTodoFilters } from './filters/updateTodoFilters';
import { updateTodoDueDate } from './filters/updateTodoDueDate';

export function updateTodo(todo: UnknownObject): JsonRpcResult<Todo, UnknownObject> {
    const state = useTodoStore.getState();
    const { entity, error } = validateTodoEntity(todo, state);

    if (entity) {
        const newState = { ...state };
        const oldTodo = state.todos.byId[entity.todo_id];
        const newTodo = { ...state.todos.byId[entity.todo_id], ...entity } as ExtendedTodo;

        // дополняем сущность полями специфичными для стора
        if (newTodo.due_date) {
            newTodo.due_date_ts = getOnlyDateTimestamp(newTodo.due_date);
            newTodo.due_date_time_ts = Date.parse(newTodo.due_date);
        }

        updateTodoFilters(newState.todos, newTodo, oldTodo);
        updateTodoCategories(newState.todos, newTodo, oldTodo);
        updateTodoDueDate(newState.todos, newTodo, oldTodo);

        newState.todos.byId[entity.todo_id] = newTodo;
        useTodoStore.setState(newState);

        return {
            result: entity,
        };
    }

    return {
        error: {
            code: 500,
            error,
            data: todo,
        },
    };
}
