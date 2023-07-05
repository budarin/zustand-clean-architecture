import { useTodoStore } from '../store.tsx';
import { validateNavigationFilter } from './validateNavigationFilter.ts';

export function setNavigationFilter(filter: UnknownObject): JsonRpc<NavigationFilter, UnknownObject> {
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
