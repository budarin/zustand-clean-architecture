import { useTodoStore } from '../../store.ts';

export function _createStatus(status: Status): void {
    return useTodoStore.setState((state) => {
        state.statuses.byId = { ...state.statuses.byId, [status.id]: status };
        state.statuses.ids = [...state.statuses.ids, status.id];

        return { ...state };
    });
}
