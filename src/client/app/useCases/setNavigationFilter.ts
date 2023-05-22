import { useTodoStore } from '../domain/store';

export function setNavigationFilter(filter: NavigationFilter) {
    useTodoStore.getState().setNavigationFilter(filter);
}
