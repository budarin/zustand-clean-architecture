import { updateTodo } from '../updateTodo';
import { resetStore } from '../../../../utils/jest/store.setup';
import { getDateOverToday } from '../../../../utils/dateTime/getDateOverToday';
import { useTodoStore } from '../../store';
import { overdueKey, recycleBinKey } from '../../navigationFilter';
import { addTodo } from '../addTodo';

beforeAll(() => {
    resetStore();
});

describe('addTodo', () => {
    it('должна возвращать ошибку если объект не является записью Todo', () => {
        const input = {
            lalala: 'lololo',
        };
        const { result, error } = updateTodo(input);

        expect(result).toBeUndefined();
        expect(error).not.toBeUndefined();
    });

    it('должна возвращать ошибку если категория задачи отсутствует в справочнике', () => {
        const input = {
            todo_id: 1,
            todo: 'string;',
            status_id: 1,
            category_id: 111,
        };

        const { result, error } = updateTodo(input);

        expect(result).toBeUndefined();
        expect(error).toEqual({
            code: 500,
            error: 'Категория задачи не обнаружена в стправочнике',
            data: {
                todo_id: 1,
                todo: 'string;',
                status_id: 1,
                category_id: 111,
            },
        });
    });

    it('должна возвращать ошибку если статус задачи отсутствует в справочнике', () => {
        const input = {
            todo_id: 1,
            todo: 'string;',
            status_id: 111,
        };

        const { result, error } = updateTodo(input);

        expect(result).toBeUndefined();
        expect(error).toEqual({
            code: 500,
            error: 'Статус задачи не обнаружен в стправочнике',
            data: {
                todo_id: 1,
                todo: 'string;',
                status_id: 111,
            },
        });
    });

    it('должна обновить задачу в хранилище и обновить фильтры', () => {
        const todo_id = 10;
        let input = {
            todo_id,
            status_id: 1,
            category_id: 1,
            todo: 'Todo10',
            deleted: true,
            due_date: getDateOverToday(-1),
        };

        const addedResult = addTodo(input);
        expect(addedResult.error).toBeUndefined();
        expect(addedResult.result).not.toBeUndefined();

        if (addedResult.result === undefined) {
            return;
        }

        const state = useTodoStore.getState();

        input = {
            todo_id,
            status_id: 2,
            category_id: 2,
            todo: 'Todo10',
            deleted: false,
            due_date: getDateOverToday(+1),
        };

        const { result, error } = updateTodo(input);

        expect(error).toBeUndefined();
        expect(result).toMatchObject({
            todo_id,
            status_id: 2,
            category_id: 2,
            todo: 'Todo10',
            deleted: false,
        });

        if (result === undefined) {
            return;
        }

        // задача должна быть в новой категории
        result.category_id && expect(state.todos.idsByCategoryId[result.category_id]).toContain(todo_id);

        // задача не должна быть в старой категории
        addedResult.result.category_id &&
            expect(state.todos.idsByCategoryId[addedResult.result.category_id]).not.toContain(todo_id);

        // задача не должна быть в списке просроченных
        expect(state.todos.idsByFilterId[overdueKey]).not.toContain(todo_id);
        // задача не должна быть в списке Удаленных
        expect(state.todos.idsByFilterId[recycleBinKey]).not.toContain(todo_id);

        // в списке на дату старой записи не должно быть задачи
        expect(state.todos.idsByDueDate[addedResult.result.due_date_ts]).not.toContain(todo_id);
        // в списке на дату новой записи должна быть задача
        expect(state.todos.idsByDueDate[result.due_date_ts]).toContain(todo_id);
    });
});
