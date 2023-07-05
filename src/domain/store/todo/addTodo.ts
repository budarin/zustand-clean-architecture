import { useTodoStore } from '../store.tsx';
import { validateTodo } from './validateTodo.ts';
import { updateTodoFilters } from './filters/updateTodoFilters.ts';
import { updateTodoDueDate } from './filters/updateTodoDueDate.ts';
import { updateTodoCategories } from './filters/updateTodoCategories.ts';
import { getOnlyDateTimestamp } from '../../../utils/dateTime/getOnlyDateTimestamp.ts';

export function addTodo(todo: UnknownObject): JsonRpc<ExtendedTodo, UnknownObject> {
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
