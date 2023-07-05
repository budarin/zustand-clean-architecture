import { useTodoStore } from '../store.tsx';
import { validateIcon } from './validateIcon.ts';

export function addIcon(icon: UnknownObject): JsonRpc<Icon, UnknownObject> {
    const state = useTodoStore.getState();
    const { entity, error } = validateIcon(icon, state, 'add');

    if (entity) {
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
