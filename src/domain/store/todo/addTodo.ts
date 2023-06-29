import { useTodoStore } from '../store';
import { validateTodo } from './validateTodo';
import { updateTodoCategories } from './filters/updateTodoCategories';
import { getOnlyDateTimestamp } from '../../../utils/dateTime/getOnlyDateTimestamp';
import { updateTodoFilters } from './filters/updateTodoFilters';
import { updateTodoDueDate } from './filters/updateTodoDueDate';

export function addTodo(todo: UnknownObject): JsonRpcResult<ExtendedTodo, UnknownObject> {
    const state = useTodoStore.getState();
    const { entity, error } = validateTodo(todo, state, 'add');

    if (entity) {
        const newState = { ...state };
        const newTodo = entity as ExtendedTodo;

        // дополняем сущность полями специфичными для стора
        if (newTodo.due_date) {
            newTodo.due_date_ts = getOnlyDateTimestamp(newTodo.due_date);
            newTodo.due_date_time_ts = Date.parse(newTodo.due_date);
        }

        updateTodoFilters(newState.todos, newTodo);
        updateTodoCategories(newState.todos, newTodo);
        updateTodoDueDate(newState.todos, newTodo);

        newState.todos.byId = { ...state.todos.byId, [newTodo.todo_id]: newTodo };
        newState.todos.ids = [...state.todos.ids, newTodo.todo_id];
        useTodoStore.setState(newState);

        return {
            result: newTodo,
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
