import { useTodoStore } from './app/domain/store.tsx';
import { joyfullyGilling } from './services/Notification/index.ts';
import { OVERDUE_TODOS } from '../common/utils/messages.ts';
import { createCalendarNavigationFilter } from './app/action_creators/createCalendarNavigationFilter.ts';

export function onServiceWorkerMessage(this: ServiceWorkerContainer, event: MessageEvent<any>): any {
    // console.log(event);

    switch (event.data.type) {
        case OVERDUE_TODOS: {
            event.data.payload.forEach((todoId: number) => {
                const store = useTodoStore.getState();
                const todo = store.todos.byId[todoId];

                joyfullyGilling(`lalala: ${todo.todo}`, {
                    toastId: 'due_date:' + todo.todo,
                    onClose: () => {
                        store.setNavigationFilter(createCalendarNavigationFilter(new Date()));
                        store._addToOverduedTodos(todoId);
                    },
                });

                // if (document.visibilityState === 'visible') {
                //     joyfullyGilling(`lalala: ${todo.todo}`, {
                //         toastId: 'due_date:' + todo.todo,
                //         onClose: () => {
                //             store.setNavigationFilter(createCalendarNavigationFilter(new Date()));
                //             store._addToOverduedTodos(todoId);
                //         },
                //     });
                // } else {
                //     window.location.reload();
                // }
            });
            break;
        }

        default:
            break;
    }
}
