import { useEffect } from 'react';
import { useTodoStore } from '../domain/store';
import { joyfullyGilling } from '../../services/notification';
import { overdueKey } from '../domain/navigationFilter';

const ONE_MINUTE = 60000;
const TWO_MINUTES = ONE_MINUTE * 2;

export function useCheckingDueDateOfTodos() {
    const todos = useTodoStore((state) => state.todos.byId);
    const overdueIds = useTodoStore((state) => state.todos.idsByFilterId[overdueKey]);
    const _addToOverduedTodos = useTodoStore((state) => state._addToOverduedTodos);

    useEffect(() => {
        let timer: NodeJS.Timer;
        let mounted = true;

        const checkDueDateMatchedTodos = (todos: TodoById, overdueIds: readonly Id[]) => {
            const now = Date.now();

            Object.values(todos).forEach((todo) => {
                if (todo.due_date) {
                    const diff = todo.due_date - now;
                    const isOverdue = diff < 0 && overdueIds.indexOf(todo.todo_id) === -1;

                    if (isOverdue) {
                        if (Math.abs(diff) < TWO_MINUTES) {
                            joyfullyGilling(`lalala: ${todo.todo}`, {
                                toastId: 'due_date:' + todo.todo,
                            });
                        }

                        _addToOverduedTodos(todo.todo_id);
                    }
                }
            });
        };

        if (mounted) {
            timer = setInterval(() => {
                checkDueDateMatchedTodos(todos, overdueIds);
            }, ONE_MINUTE);
        }

        return () => {
            mounted = false;
            clearInterval(timer);
        };
    }, [todos, overdueIds, _addToOverduedTodos]);
}
