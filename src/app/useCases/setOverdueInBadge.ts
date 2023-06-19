import { useTodoStore } from '../../domain/store/store.tsx';

export async function setOverdueInBadge(): Promise<void> {
    const { todos } = useTodoStore.getState();

    if ('setAppBadge' in navigator) {
        const values = Object.values(todos.idsByDueDate) as Id[][];
        const count = values.reduce((acc, arr) => {
            return acc + arr.length;
        }, 0);

        count ? await navigator.setAppBadge(count) : await navigator.clearAppBadge();
    }
}
