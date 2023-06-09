import { validateTodo } from './validateTodo.ts';
import { useTodoStore } from '../../store/store.tsx';
import { updateTodoDueDate } from './filters/updateTodoDueDate.ts';
import { updateTodoFilters } from './filters/updateTodoFilters.ts';
import { updateTodoCategories } from './filters/updateTodoCategories.ts';
import { getOnlyDateTimestamp } from '../../../utils/dateTime/getOnlyDateTimestamp.ts';

export function updateTodo(todo: UnknownObject): JsonRpc<ExtendedTodo, UnknownObject> {
    const state = useTodoStore.getState();
    const { entity, error } = validateTodo(todo, state, 'update');

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
