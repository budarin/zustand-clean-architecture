import { create } from 'zustand';

import { TodoStoreError } from './TodoStoreError.tsx';
import { createSelectors } from './createSelectors.ts';
import { validateTodoEntity } from './todo/validateTodoEntity.ts';
import { validateIconEntity } from './icon/validateIconEntity.ts';
import { updateFilterCounters } from './todo/updateFilterCounters.ts';
import { validateStatusEntity } from './status/validateStatusEntity.ts';
import { updateICategoryCounters } from './todo/updateICategoryCounters.ts';
import { validateCategoryEntity } from './category/validateCategoryEntity.ts';

import {
    inboxKey,
    navigationFilterTypes,
    navigationFilters,
    nextKey,
    recycleBinKey,
    todayKey,
} from './navigationFilter/index.ts';

type Actions = {
    // Icon
    _createIcon: (icon: UnknownObject) => void;

    // Status
    _createStatus: (status: UnknownObject) => void;

    // Category
    _createCategory: (category: UnknownObject) => void;
    _updateCategory: (category: UnknownObject) => void;
    _deleteCategory: (id: Category['category_id']) => void;

    // Todo
    _createTodo: (todo: UnknownObject) => void;
    _updateTodo: (todo: UnknownObject) => void;
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
    _createIcon: (icon: UnknownObject) => {
        return set((state) => {
            const { entity, error } = validateIconEntity(icon, state);

            if (entity) {
                state.icons.byId = { ...state.icons.byId, [entity.icon_id]: entity };
                state.icons.ids = [...state.icons.ids, entity.icon_id];

                return { ...state };
            }

            throw new TodoStoreError(error, icon);
        });
    },

    // Status
    _createStatus: (status: UnknownObject) => {
        return set((state) => {
            const { entity, error } = validateStatusEntity(status, state);

            if (entity) {
                if (state.statuses.ids.includes(entity.status_id) === true) {
                    throw new TodoStoreError(`Нарушение уникальности ключа statuses.status_id!`, status);
                }

                state.statuses.byId = { ...state.statuses.byId, [entity.status_id]: entity };
                state.statuses.ids = [...state.statuses.ids, entity.status_id];
                return { ...state };
            }

            throw new TodoStoreError(error, status);
        });
    },

    // Category
    _createCategory: (category: UnknownObject) => {
        return set((state) => {
            const { entity, error } = validateCategoryEntity(category, state);

            if (entity) {
                if (state.categories.ids.includes(entity.category_id) === true) {
                    throw new TodoStoreError('Нарушение уникальности ключа categories', category);
                }

                state.categories.byId = { ...state.categories.byId, [entity.category_id]: entity };
                state.categories.ids = [...state.categories.ids, entity.category_id];
                return { ...state };
            }

            throw new TodoStoreError(error, category);
        });
    },

    _updateCategory: (category: UnknownObject) => {
        return set((state) => {
            const { entity, error } = validateCategoryEntity(category, state);

            if (entity) {
                state.categories.byId[entity.category_id] = {
                    ...state.categories.byId[entity.category_id],
                    ...entity,
                };
                return { ...state };
            }

            throw new TodoStoreError(error, category);
        });
    },

    _deleteCategory: (id: Category['category_id']) => {
        return set((state) => {
            const { [id]: deleted, ...restById } = state.categories.byId;

            if (Object.keys(state.todos.idsByCategoryId).includes(String(id))) {
                throw new TodoStoreError(
                    `Нельзя удалить категорию "${deleted.category}": в этой категории есть задачи!`,
                );
            }

            state.categories.byId = restById;

            const ids = state.categories.ids;
            const idx = ids.indexOf(id);
            if (idx > -1) {
                state.categories.ids = ids.filter((item) => item !== id);
            }

            // удалить в todos idsByCategoryId так как там нет todos
            const { [id]: del, ...restIdsByCategoryId } = state.todos.idsByCategoryId;
            state.todos.idsByCategoryId = restIdsByCategoryId;

            return { ...state };
        });
    },

    // Todo
    _createTodo: (todo: UnknownObject) => {
        return set((state) => {
            const { entity, error } = validateTodoEntity(todo, state);

            if (entity) {
                if (state.todos.ids.includes(entity.todo_id) === true) {
                    throw new TodoStoreError('Нарушение уникальности ключа todos!', { todo });
                }

                state.todos.byId = { ...state.todos.byId, [entity.todo_id]: entity };
                state.todos.ids = [...state.todos.ids, entity.todo_id];

                updateICategoryCounters(entity, state.todos);
                updateFilterCounters(entity, state.todos);

                return { ...state };
            }

            throw new TodoStoreError(error, todo);
        });
    },

    _updateTodo: (todo: UnknownObject) => {
        return set((state) => {
            const { entity, error } = validateTodoEntity(todo, state);

            if (entity) {
                const newTodo = { ...state.todos.byId[entity.todo_id], ...entity };

                state.todos.byId[entity.todo_id] = newTodo;
                updateICategoryCounters(newTodo, state.todos);
                updateFilterCounters(newTodo, state.todos);

                return { ...state };
            }

            throw new TodoStoreError(error, todo);
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
            if (state.navigationFilter.key === filter.key) {
                return state;
            }

            state.navigationFilter = filter;
            return { ...state };
        });
    },
}));

export const useTodoStore = createSelectors(todoStore);
