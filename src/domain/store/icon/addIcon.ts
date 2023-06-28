import { useTodoStore } from '../store';
import { validateIcon } from './validateIcon';

export function addIcon(icon: UnknownObject): JsonRpcResult<Icon, UnknownObject> {
    const state = useTodoStore.getState();
    const { entity, error } = validateIcon(icon, state);

    if (entity) {
        if (state.icons.ids.includes(entity.icon_id) === true) {
            return {
                error: {
                    code: 500,
                    error: `Нарушение уникальности ключа icons`,
                    data: icon,
                },
            };
        }

        const newState = { ...state };

        newState.icons.byId = { ...state.icons.byId, [entity.icon_id]: entity };
        newState.icons.ids = [...state.icons.ids, entity.icon_id];
        useTodoStore.setState(newState);

        return { result: entity };
    }

    return {
        error: {
            code: 500,
            error,
            data: icon,
        },
    };
}
