import { create } from 'zustand';

import {
    todayKey,
    inboxKey,
    nextKey,
    recycleBinKey,
    navigationFilters,
    navigationFilterTypes,
} from './utils/navigationFilter';

import { createSelectors } from './utils/createSelectors';
import { updateICategoryCounters } from './entities/todo/utils/updateICategoryCounters.ts';
import { updateFilterCounters } from './entities/todo/utils/updateFilterCounters.ts';

type Actions = {
    createIcon: (icon: Icon) => void;
    createStatus: (status: Status) => void;

    createCategory: (category: Category) => void;
    updateCategory: (category: Category) => void;
    deleteCategory: (id: Category['id']) => void;

    createTodo: (todo: Todo) => void;
    updateTodo: (todo: Todo) => void;
    deleteTodo: (id: Todo['id']) => void;
};

const todoStore = create<State & Actions>((set) => ({
    icons: {
        byId: {},
        ids: [],
    },

    statuses: {
        byId: {},
        ids: [],
    },

    categories: {
        byId: {},
        ids: [],
    },

    todos: {
        byId: {},
        ids: [],
        idsByCategoryId: {},
        idsByFilterId: {
            [inboxKey]: [],
            [todayKey]: [],
            [nextKey]: [],
            [recycleBinKey]: [],
        },
    },

    navigationFilter: {
        key: todayKey,
        title: navigationFilters[todayKey],
        type: navigationFilterTypes.filter,
    },

    createIcon: (icon: Icon) => {
        return set((state) => {
            state.icons.byId = { ...state.icons.byId, [icon.id]: icon };
            state.icons.ids = [...state.icons.ids, icon.id];
            return { ...state };
        });
    },

    createStatus: (status: Status) => {
        return set((state) => {
            state.statuses.byId = { ...state.statuses.byId, [status.id]: status };
            state.statuses.ids = [...state.statuses.ids, status.id];
            return { ...state };
        });
    },

    createCategory: (category: Category) => {
        return set((state) => {
            state.categories.byId = { ...state.categories.byId, [category.id]: category };
            state.categories.ids = [...state.categories.ids, category.id];
            return { ...state };
        });
    },

    updateCategory: (category: Category) => {
        return set((state) => {
            state.categories.byId[category.id] = { ...state.categories.byId[category.id], ...category };
            return { ...state };
        });
    },

    deleteCategory: (id) => {
        return set((state) => {
            const { [id]: deleted, ...rest } = state.categories.byId;
            state.categories.byId = rest;

            const ids = state.categories.ids;
            const idx = ids.indexOf(id);
            if (idx > -1) {
                state.categories.ids = ids.filter((item) => item !== id);
            }

            return { ...state };
        });
    },

    createTodo: (todo: Todo) => {
        return set((state) => {
            state.todos.byId = { ...state.todos.byId, [todo.id]: todo };
            state.todos.ids = [...state.todos.ids, todo.id];
            updateICategoryCounters(todo, state.todos);
            updateFilterCounters(todo, state.todos);
            return { ...state };
        });
    },

    updateTodo: (todo: Todo) => {
        return set((state) => {
            const newTodo = { ...state.todos.byId[todo.id], ...todo };

            state.todos.byId[todo.id] = newTodo;
            updateICategoryCounters(newTodo, state.todos);
            updateFilterCounters(newTodo, state.todos);

            return { ...state };
        });
    },

    deleteTodo: (id: Todo['id']) => {
        return set((state) => {
            const { [id]: del, ...rest } = state.todos.byId;
            state.todos.byId = rest;

            const ids = state.todos.ids;
            let idx = ids.indexOf(id);
            if (idx > -1) {
                state.todos.ids = ids.filter((item) => item !== id);
            }

            return { ...state };
        });
    },
}));

export const useTodoStore = createSelectors(todoStore);
