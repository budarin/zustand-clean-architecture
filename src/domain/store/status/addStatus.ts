import { useTodoStore } from '../store.tsx';
import { validateStatus } from './validateStatus.ts';

export function addStatus(status: UnknownObject): JsonRpcResult<Status, UnknownObject> {
    const state = useTodoStore.getState();
    const { entity, error } = validateStatus(status, state, 'add');

    if (entity) {
        const newState = { ...state };

        newState.statuses.byId = { ...state.statuses.byId, [entity.status_id]: entity };
        newState.statuses.ids = [...state.statuses.ids, entity.status_id];

        useTodoStore.setState(newState);

        return {
            result: entity,
        };
    }

    return {
        error: {
            code: 500,
            error,
            data: status,
        },
    };
}
