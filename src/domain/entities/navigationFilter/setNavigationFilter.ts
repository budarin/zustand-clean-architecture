import { useTodoStore } from '../../store/store';

export function setNavigationFilter(filter: NavigationFilter): JsonRpcResult<NavigationFilter> {
    const state = useTodoStore.getState();

    if (state.navigationFilter.key === filter.key) {
        return {
            result: filter,
        };
    }

    const newState = { ...state };
    newState.navigationFilter = filter;
    useTodoStore.setState(newState);

    return {
        result: filter,
    };
}
