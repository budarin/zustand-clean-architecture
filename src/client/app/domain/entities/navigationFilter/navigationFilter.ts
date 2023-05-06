import { useTodoStore } from '../../store.ts';

export function _setNavigationFilter(filter: NavigationFilter): void {
    return useTodoStore.setState((state) => {
        state.navigationFilter = filter;

        return { ...state };
    });
}
