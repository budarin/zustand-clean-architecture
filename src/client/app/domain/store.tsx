import { create } from 'zustand';

import {
    todayKey,
    inboxKey,
    nextKey,
    recycleBinKey,
    navigationFilters,
    navigationFilterTypes,
} from './navigationFilter/index.ts';

import { validateIcon } from './icon/validation.ts';
import { createSelectors } from './_utils/createSelectors.ts';
import { updateFilterCounters } from './todo/utils/updateFilterCounters.ts';
import { updateICategoryCounters } from './todo/utils/updateICategoryCounters.ts';
import { validateCategory } from './category/validation.ts';

export class TodoStoreError extends Error {
    constructor(message: string, data?: Record<string | number, unknown>) {
        super(message);
        this.name = 'TodoStoreError';
    }
}

type Actions = {
    // Icon
    _createIcon: (icon: Icon) => void;

    // Status
    _createStatus: (status: Status) => void;

    // Category
    _createCategory: (category: Category) => void;
    _updateCategory: (category: Category) => void;
    _deleteCategory: (id: Category['category_id']) => void;

    // Todo
    _createTodo: (todo: Todo) => void;
    _updateTodo: (todo: Todo) => void;
    _deleteTodo: (id: Todo['todo_id']) => void;

    // NavigationFilter
    _setNavigationFilter: (filter: NavigationFilter) => void;
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

    // Icon
    _createIcon: (icon: Icon) => {
        return set((state) => {
            const { isValid, error } = validateIcon(icon);

            if (isValid === false) {
                throw new TodoStoreError('Ошибка валидации объекта icon', { icon, error });
            }

            if (state.icons.ids.includes(icon.icon_id) === true) {
                throw new TodoStoreError(`Нарушение уникальности ключа icons.icon_id!`, icon);
            }

            if (Object.values(state.icons.byId).find((item) => item.icon_name == icon.icon_name)) {
                throw new TodoStoreError(`Нарушение уникальности имени иконки в  icons!`, icon);
            }

            state.icons.byId = { ...state.icons.byId, [icon.icon_id]: icon };
            state.icons.ids = [...state.icons.ids, icon.icon_id];
            return { ...state };
        });
    },

    // Status
    _createStatus: (status: Status) => {
        return set((state) => {
            if (state.statuses.ids.includes(status.status_id) === true) {
                throw new TodoStoreError(`Нарушение уникальности ключа statuses.status_id!`, status);
            }

            if (Object.values(state.statuses.byId).find((item) => item.status == status.status)) {
                throw new TodoStoreError(`Нарушение уникальности имени статуса в  statuses!`, status);
            }

            state.statuses.byId = { ...state.statuses.byId, [status.status_id]: status };
            state.statuses.ids = [...state.statuses.ids, status.status_id];
            return { ...state };
        });
    },

    // Category
    _createCategory: (category: Category) => {
        return set((state) => {
            const { isValid, error } = validateCategory(category);

            if (isValid === false) {
                throw new TodoStoreError('Ошибка валидации объекта category', { category, error });
            }

            if (state.categories.ids.includes(category.category_id) === true) {
                throw new TodoStoreError(`Нарушение уникальности ключа categories.category_id!`, category);
            }

            if (Object.values(state.categories.byId).find((item) => item.category == category.category)) {
                throw new TodoStoreError(`Нарушение уникальности имени категории в categories!`, category);
            }

            if (state.icons.ids.includes(category.icon_id) === false) {
                throw new TodoStoreError(
                    `Категория "${category.category}" содержит не допустимое значение icon_id: ${category.icon_id}!`,
                    category,
                );
            }

            state.categories.byId = { ...state.categories.byId, [category.category_id]: category };
            state.categories.ids = [...state.categories.ids, category.category_id];
            return { ...state };
        });
    },

    _updateCategory: (category: Category) => {
        return set((state) => {
            if (Object.values(state.categories.byId).find((item) => item.category == category.category)) {
                throw new TodoStoreError(`Нарушение уникальности имени категории в categories!`, category);
            }

            state.categories.byId[category.category_id] = {
                ...state.categories.byId[category.category_id],
                ...category,
            };
            return { ...state };
        });
    },

    _deleteCategory: (id: Category['category_id']) => {
        return set((state) => {
            const { [id]: deleted, ...rest } = state.categories.byId;

            if (Object.values(state.todos.byId).find((todo) => todo.category_id === id)) {
                throw new TodoStoreError(
                    `Нельзя удалить категорию "${deleted.category}": в этой категории есть задачи!`,
                );
            }

            state.categories.byId = rest;

            const ids = state.categories.ids;
            const idx = ids.indexOf(id);
            if (idx > -1) {
                state.categories.ids = ids.filter((item) => item !== id);
            }

            return { ...state };
        });
    },

    // Todo
    _createTodo: (todo: Todo) => {
        return set((state) => {
            if (state.todos.ids.includes(todo.todo_id) === true) {
                throw new TodoStoreError(`Нарушение уникальности ключа todos.todo_id!`, todo);
            }

            state.todos.byId = { ...state.todos.byId, [todo.todo_id]: todo };
            state.todos.ids = [...state.todos.ids, todo.todo_id];
            updateICategoryCounters(todo, state.todos);
            updateFilterCounters(todo, state.todos);
            return { ...state };
        });
    },

    _updateTodo: (todo: Todo) => {
        return set((state) => {
            const newTodo = { ...state.todos.byId[todo.todo_id], ...todo };

            state.todos.byId[todo.todo_id] = newTodo;
            updateICategoryCounters(newTodo, state.todos);
            updateFilterCounters(newTodo, state.todos);

            return { ...state };
        });
    },

    _deleteTodo: (id: Todo['todo_id']) => {
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

    // NavigationFilter
    _setNavigationFilter: (filter: NavigationFilter) => {
        return set((state) => {
            state.navigationFilter = filter;

            return { ...state };
        });
    },
}));

export const useTodoStore = createSelectors(todoStore);
