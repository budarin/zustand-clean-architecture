import { useTodoStore } from '../store';
import { validateNavigationFilter } from './validateNavigationFilter';

export function setNavigationFilter(filter: UnknownObject): JsonRpcResult<NavigationFilter, UnknownObject> {
    const state = useTodoStore.getState();
    const { entity, error } = validateNavigationFilter(filter, state);

    if (entity) {
        if (state.navigationFilter.key === entity.key) {
            return {
                result: entity,
            };
        }

        const newState = { ...state };

        newState.navigationFilter = entity;
        useTodoStore.setState(newState);

        return {
            result: entity,
        };
    }

    return {
        error: {
            code: 500,
            error,
            data: filter,
        },
    };
}
