import { useTodoStore } from '../domain/store.ts';

export function createIcon(icon: Icon): void {
    return useTodoStore.setState((state: State) => {
        state.icons.byId = { ...state.icons.byId, [icon.id]: icon };
        state.icons.ids = [...state.icons.ids, icon.id];

        return { ...state };
    });
}
