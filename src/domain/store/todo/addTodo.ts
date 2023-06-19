import { useTodoStore } from '../store';
import { validateTodoEntity } from './validateTodoEntity';
import { updateTodoCategories } from './filters/updateTodoCategories';
import { getOnlyDateTimestamp } from '../../../utils/dateTime/getOnlyDateTimestamp';
import { updateTodoFilters } from './filters/updateTodoFilters';
import { updateTodoDueDate } from './filters/updateTodoDueDate';

export function addTodo(todo: UnknownObject): JsonRpcResult<Todo, UnknownObject> {
    const state = useTodoStore.getState();
    const { entity, error } = validateTodoEntity(todo, state);

    if (entity) {
        if (state.todos.ids.includes(entity.todo_id) === true) {
            return {
                error: {
                    code: 500,
                    error: `Нарушение уникальности ключа todos!`,
                    data: todo,
                },
            };
        }

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
