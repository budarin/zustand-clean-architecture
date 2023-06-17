import { useTodoStore } from '../../store/store';
import { validateStatusEntity } from './validation';

export function addStatus(status: UnknownObject): JsonRpcResult<Status, UnknownObject> {
    const state = useTodoStore.getState();
    const { entity, error } = validateStatusEntity(status, state);

    if (entity) {
        if (state.statuses.ids.includes(entity.status_id) === true) {
            return {
                error: {
                    code: 500,
                    error: `Нарушение уникальности ключа statuses!`,
                    data: status,
                },
            };
        }

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
