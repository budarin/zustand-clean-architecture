import { useTodoStore } from '../domain/store.ts';

export function createCategory(category: Category): void {
    return useTodoStore.setState((state) => {
        state.categories.byId = { ...state.categories.byId, [category.id]: category };
        state.categories.ids = [...state.categories.ids, category.id];

        return { ...state };
    });
}

export function updateCategory(category: Category): void {
    return useTodoStore.setState((state) => {
        state.categories.byId[category.id] = { ...state.categories.byId[category.id], ...category };

        return { ...state };
    });
}

export function deleteCategory(id: Category['id']): void {
    return useTodoStore.setState((state) => {
        const { [id]: deleted, ...rest } = state.categories.byId;
        state.categories.byId = rest;

        const ids = state.categories.ids;
        const idx = ids.indexOf(id);
        if (idx > -1) {
            state.categories.ids = ids.filter((item) => item !== id);
        }

        return { ...state };
    });
}
