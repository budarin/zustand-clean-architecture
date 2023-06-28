import { addTodo } from '../addTodo';
import { resetStore } from '../../../../utils/jest/store.setup';
import { useTodoStore } from '../../store';
import { getDateOverToday } from '../../../../utils/dateTime/getDateOverToday';
import { overdueKey, recycleBinKey } from '../../navigationFilter';
import { getOnlyDateTimestamp } from '../../../../utils/dateTime/getOnlyDateTimestamp';

beforeAll(() => {
    resetStore();
});

describe('addTodo', () => {
    it('должна возвращать ошибку если объект не является записью Todo', () => {
        const input = {
            lalala: 'lololo',
        };
        const { result, error } = addTodo(input);

        expect(result).toBeUndefined();
        expect(error).not.toBeUndefined();
    });

    it('должна возвращать ошибку если в хранилище существует задача с таким же id', () => {
        const input = {
            todo_id: 1,
            todo: 'string;',
            status_id: 1,
        };

        const { result, error } = addTodo(input);

        expect(result).toBeUndefined();
        expect(error).toEqual({
            code: 500,
            error: 'Нарушение уникальности идентификатора задач',
            data: {
                todo_id: 1,
                todo: 'string;',
                status_id: 1,
            },
        });
    });

    it('должна возвращать ошибку если категория задачи отсутствует в справочнике', () => {
        const input = {
            todo_id: 111,
            todo: 'string;',
            status_id: 1,
            category_id: 111,
        };

        const { result, error } = addTodo(input);

        expect(result).toBeUndefined();
        expect(error).toEqual({
            code: 500,
            error: 'Категория задачи не обнаружена в стправочнике',
            data: {
                todo_id: 111,
                todo: 'string;',
                status_id: 1,
                category_id: 111,
            },
        });
    });

    it('должна возвращать ошибку если статус задачи отсутствует в справочнике', () => {
        const input = {
            todo_id: 111,
            todo: 'string;',
            status_id: 111,
        };

        const { result, error } = addTodo(input);

        expect(result).toBeUndefined();
        expect(error).toEqual({
            code: 500,
            error: 'Статус задачи не обнаружен в стправочнике',
            data: {
                todo_id: 111,
                todo: 'string;',
                status_id: 111,
            },
        });
    });

    it('должна добавлять корректную задачу в список задач', () => {
        const todo_id = 10;
        const category_id = 1;
        const due_date = getDateOverToday(-1);

        const input = {
            todo_id,
            status_id: 1,
            category_id,
            todo: 'Todo10',
            deleted: true,
            due_date,
        };

        const { result, error } = addTodo(input);

        expect(error).toBeUndefined();
        expect(result).toMatchObject({
            todo_id,
            status_id: 1,
            category_id,
            todo: 'Todo10',
            deleted: true,
            completed: false,
            due_date,
            description: undefined,
        });

        const state = useTodoStore.getState();
        const addedTodo = state.todos.byId[todo_id];

        expect(state.todos.ids).toContain(todo_id);
        expect(result).toEqual(addedTodo);

        // запись раскидать по фильтрам
        expect(state.todos.idsByCategoryId[category_id]).toContain(todo_id);
        expect(state.todos.idsByFilterId[overdueKey]).toContain(todo_id);
        expect(state.todos.idsByFilterId[recycleBinKey]).toContain(todo_id);
        expect(state.todos.idsByDueDate[addedTodo.due_date_ts]).toContain(todo_id);
    });
});
