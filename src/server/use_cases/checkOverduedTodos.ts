import { TWO_MINUTES } from '../../common/utils/dateTime/consts.ts';

export function checkOverduedTodos(todos: Entities['todos']): Id[] {
    const today = new Date();
    const now = today.valueOf();
    const overDueTodoIds = [] as Id[];

    Object.values(todos || {}).forEach((todo: Todo) => {
        if (todo.due_date) {
            const diff = now - new Date(todo.due_date).valueOf();
            const isOverdue = diff > 0 && !todo.completed && !todo.deleted;

            if (isOverdue) {
                if (Math.abs(diff) < TWO_MINUTES) {
                    overDueTodoIds.push(todo.todo_id);
                }
            }
        }
    });

    return overDueTodoIds;
}
