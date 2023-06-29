import { renderHook } from '@testing-library/react';
import { useTodoStore } from '../../../domain/store/store';
import { addTodoToOverdueList } from '../addTodoToOverdueList';
import { resetStoreForReact } from '../../../utils/jest/store.setup';
import { getDateOverToday } from '../../../utils/dateTime/getDateOverToday';
import { getOnlyDateTimestamp } from '../../../utils/dateTime/getOnlyDateTimestamp';

beforeAll(() => {
    resetStoreForReact();
});

describe('addTodoToOverdueList', () => {
    it('не должен добавлять задачу в просроченные если она не просрочена', () => {
        const { result } = renderHook(() => {
            return addTodoToOverdueList(1);
        });

        expect(result.current).not.toBeUndefined();
        expect(result.current).toEqual(1);

        const newState = useTodoStore.getState();
        const newTodo = newState.todos.byId[1];

        // проверяем что задача не находится в списке просроченных
        if (newTodo.due_date_ts) {
            expect(newState.todos.idsByDueDate[newTodo.due_date_ts]).not.toContain(newTodo.todo_id);
        }
    });

    it('должен добавить TodoId в список просроченных задач', () => {
        const newState = { ...useTodoStore.getState() };
        const newTodo = { ...newState.todos.byId[1] };

        // обновляем задачу так чтобы она была просроченной но не попала в список просроченных
        newTodo.due_date = getDateOverToday(-1);
        newTodo.due_date_ts = getOnlyDateTimestamp(newTodo.due_date);
        newTodo.due_date_time_ts = Date.parse(newTodo.due_date);

        newState.todos.byId[1] = newTodo;
        useTodoStore.setState(newState);

        const { result } = renderHook(() => {
            return addTodoToOverdueList(1);
        });

        expect(result.current).not.toBeUndefined();
        expect(result.current).toEqual(1);

        // проверяем что задача находится в списке просроченных
        expect(newState.todos.idsByDueDate[newTodo.due_date_ts]).toContain(newTodo.todo_id);
    });
});
