import { validateTodo } from './validateTodo.ts';
import { useTodoStore } from '../../store/store.tsx';
import { overdueKey, recycleBinKey } from '../navigationFilter/index.ts';

export function deleteTodo(todo: UnknownObject): JsonRpcResult<Todo, UnknownObject> {
    const state = useTodoStore.getState();
    const { entity, error } = validateTodo(todo, state, 'delete');

    if (entity) {
        const newState = { ...useTodoStore.getState() };
        const { category_id, due_date_ts } = state.todos.byId[entity.todo_id];
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [entity.todo_id]: del, ...rest } = state.todos.byId;

        newState.todos.byId = rest;

        const ids = state.todos.ids;
        const idx = ids.indexOf(entity.todo_id);
        if (idx > -1) {
            newState.todos.ids = ids.filter((item) => item !== entity.todo_id);
        }

        // удаляем задачу из списков фильтров и категорий
        // удаляем из фильтра по категории
        if (category_id && state.todos.idsByCategoryId[category_id].includes(entity.todo_id)) {
            const arr = state.todos.idsByCategoryId[category_id];
            newState.todos.idsByCategoryId[category_id] = arr.filter((item) => item !== entity.todo_id);
        }

        // удаляем из фильтра Просроченные
        if (state.todos.idsByFilterId[overdueKey].includes(entity.todo_id)) {
            const arr = state.todos.idsByFilterId[overdueKey];
            newState.todos.idsByFilterId[overdueKey] = arr.filter((item) => item !== entity.todo_id);
        }

        // удаляем из фильтра Удаленные
        if (state.todos.idsByFilterId[recycleBinKey].includes(entity.todo_id)) {
            const arr = state.todos.idsByFilterId[recycleBinKey];
            newState.todos.idsByFilterId[recycleBinKey] = arr.filter((item) => item !== entity.todo_id);
        }

        // удаляем из фильтра по дате
        if (state.todos.idsByDueDate[due_date_ts].includes(entity.todo_id)) {
            const arr = state.todos.idsByDueDate[due_date_ts] as number[];
            newState.todos.idsByDueDate[due_date_ts] = arr.filter((item) => item !== entity.todo_id);
        }

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
