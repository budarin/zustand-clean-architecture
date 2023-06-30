import { addTodo } from '../addTodo';
import { deleteTodo } from '../deleteTodo';
import { useTodoStore } from '../../store';
import { resetStore } from '../../../../utils/jest/store.setup';
import { overdueKey, recycleBinKey } from '../../navigationFilter';
import { getDateOverToday } from '../../../../utils/dateTime/getDateOverToday';

beforeAll(() => {
    resetStore();
});

describe('addTodo', () => {
    it('должна возвращать ошибку если объект не является записью Todo', () => {
        const input = {
            lalala: 'lololo',
        };
        const { result, error } = deleteTodo(input);

        expect(result).toBeUndefined();
        expect(error).not.toBeUndefined();
    });

    it('должна возвращать ошибку если задача отсутствует в хранилище', () => {
        const input = {
            todo_id: 111,
            status_id: 1,
            category_id: 1,
            todo: 'Todo10',
            deleted: true,
            completed: false,
        };
        const { result, error } = deleteTodo(input);

        expect(result).toBeUndefined();
        expect(error).not.toBeUndefined();
    });

    it('должна удалять задачу из хранилища и из фильтров и категорий', () => {
        const todo_id = 10;
        const category_id = 1;
        const due_date = getDateOverToday(-1);

        const input = {
            todo_id,
            status_id: 1,
            category_id,
            todo: 'Todo10',
            due_date,
            deleted: true,
            completed: false,
            description: undefined,
        };

        const addedTodo = addTodo(input);
        const { result, error } = deleteTodo(input);

        expect(error).toBeUndefined();
        expect(result).toEqual(input);

        const state = useTodoStore.getState();

        expect(state.todos.ids).not.toContain(todo_id);
        expect(state.todos.byId[todo_id]).toBeUndefined();

        // запись раскидать по фильтрам
        expect(state.todos.idsByCategoryId[category_id]).not.toContain(todo_id);
        expect(state.todos.idsByFilterId[overdueKey]).not.toContain(todo_id);
        expect(state.todos.idsByFilterId[recycleBinKey]).not.toContain(todo_id);
        expect(state.todos.idsByDueDate[(addedTodo.result as ExtendedTodo).due_date_ts]).not.toContain(todo_id);
    });
});
