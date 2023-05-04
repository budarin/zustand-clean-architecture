import { create } from 'zustand';
import { unstable_batchedUpdates } from 'react-dom';

import {
    inboxKey,
    navigationFilterTypes,
    navigationFilters,
    nextKey,
    recycleBinKey,
    todayKey,
} from './navigationFilter';

import { updateFilterCounters } from './updateFilterCounters';
import { updateICategoryCounters } from './updateICategoryCounters';
import { serverInitialState } from '../../server/serverInitialState';

type Actions = {
    // icon
    createIcon(icon: Icon): void;

    // status
    createStatus(status: Status): void;

    // category
    createCategory(category: Category): void;
    updateCategory(category: Category): void;
    deleteCategory(id: Category['id']): void;

    // todo
    createTodo(todo: Todo): void;
    updateTodo(todo: Todo): void;
    deleteTodo(id: Todo['id']): void;

    // navigationFilter
    setNavigationFilter(filter: NavigationFilter): void;
};

export const useTodoStore = create<State & Actions>((set, get) => ({
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

    // icons
    createIcon: (icon) =>
        set((state: State) => {
            state.icons.byId = { ...state.icons.byId, [icon.id]: icon };
            state.icons.ids = [...state.icons.ids, icon.id];

            return { ...state };
        }),

    // statuses
    createStatus: (status) =>
        set((state) => {
            state.statuses.byId = { ...state.statuses.byId, [status.id]: status };
            state.statuses.ids = [...state.statuses.ids, status.id];

            return { ...state };
        }),

    // categories
    createCategory: (category) =>
        set((state) => {
            state.categories.byId = { ...state.categories.byId, [category.id]: category };
            state.categories.ids = [...state.categories.ids, category.id];

            return { ...state };
        }),

    updateCategory: (category) =>
        set((state) => {
            state.categories.byId[category.id] = { ...state.categories.byId[category.id], ...category };

            return { ...state };
        }),

    deleteCategory: (id) =>
        set((state) => {
            const { [id]: deleted, ...rest } = state.categories.byId;
            state.categories.byId = rest;

            const ids = state.categories.ids;
            const idx = ids.indexOf(id);
            if (idx > -1) {
                state.categories.ids = ids.filter((item) => item !== id);
            }

            return { ...state };
        }),

    // todos
    createTodo: (todo) =>
        set((state) => {
            state.todos.byId = { ...state.todos.byId, [todo.id]: todo };
            state.todos.ids = [...state.todos.ids, todo.id];
            updateICategoryCounters(todo, state.todos);
            updateFilterCounters(todo, state.todos);

            return { ...state };
        }),

    updateTodo: (todo) =>
        set((state) => {
            const newTodo = { ...state.todos.byId[todo.id], ...todo };

            state.todos.byId[todo.id] = newTodo;
            updateICategoryCounters(newTodo, state.todos);
            updateFilterCounters(newTodo, state.todos);

            return { ...state };
        }),

    deleteTodo: (id) =>
        set((state) => {
            const { [id]: del, ...rest } = state.todos.byId;
            state.todos.byId = rest;

            const ids = state.todos.ids;
            let idx = ids.indexOf(id);
            if (idx > -1) {
                state.todos.ids = ids.filter((item) => item !== id);
            }

            return { ...state };
        }),

    // navigationFilter
    setNavigationFilter: (filter: NavigationFilter) =>
        set((state) => {
            state.navigationFilter = filter;

            return { ...state };
        }),
}));

unstable_batchedUpdates(() => {
    const { icons, statuses, categories, todos } = serverInitialState;
    const { createIcon, createStatus, createCategory, createTodo } = useTodoStore.getState();

    icons?.forEach((icon) => createIcon(icon));
    statuses?.forEach((status) => createStatus(status));
    categories?.forEach((category) => createCategory(category));
    todos?.forEach((todo) => createTodo(todo));
});
