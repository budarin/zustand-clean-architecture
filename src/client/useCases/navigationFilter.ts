import { useTodoStore } from '../domain/store.ts';

export function setNavigationFilter(filter: NavigationFilter): void {
    return useTodoStore.setState((state) => {
        state.navigationFilter = filter;

        return { ...state };
    });
}
