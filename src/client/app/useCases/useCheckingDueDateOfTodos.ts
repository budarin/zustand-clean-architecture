import { useEffect } from 'react';
import { useTodoStore } from '../domain/store';
import { joyfullyGilling } from '../../services/notification';
import { overdueKey } from '../domain/navigationFilter';
import { Task, runTask } from '../../../common/runTask.ts';

const ONE_MINUTE = 60000;
const TWO_MINUTES = ONE_MINUTE * 2;

export function useCheckingDueDateOfTodos() {
    const todos = useTodoStore((state) => state.todos.byId);
    const overdueIds = useTodoStore((state) => state.todos.idsByFilterId[overdueKey]);
    const _addToOverduedTodos = useTodoStore((state) => state._addToOverduedTodos);

    useEffect(() => {
        let task: Task;
        let mounted = true;

        const checkDueDateMatchedTodos = (todos: TodoById, overdueIds: readonly Id[]) => {
            const now = new Date().valueOf();

            Object.values(todos).forEach((todo) => {
                if (todo.due_date) {
                    const diff = now - todo.due_date;
                    const isOverdue =
                        diff > 0 && overdueIds.indexOf(todo.todo_id) === -1 && !todo.completed && !todo.deleted;

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
            task = runTask(() => checkDueDateMatchedTodos(todos, overdueIds), ONE_MINUTE);
        }

        return () => {
            mounted = false;
            task.stop();
        };
    }, [todos, overdueIds, _addToOverduedTodos]);
}
