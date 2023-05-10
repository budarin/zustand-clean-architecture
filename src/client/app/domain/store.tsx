import { create } from 'zustand';

import { validateIconEntity } from './icon/validation.ts';
import { createSelectors } from './_utils/createSelectors.ts';
import { updateFilterCounters } from './_utils/navFilter/updateFilterCounters.ts';
import { updateICategoryCounters } from './_utils/navFilter/updateICategoryCounters.ts';
import { getStatusFomObject, validateStatus } from '../../../common/domain/status/validation.ts';
import { getCategoryFomObject, validateCategory } from '../../../common/domain/category/validation.ts';

import {
    inboxKey,
    navigationFilterTypes,
    navigationFilters,
    nextKey,
    recycleBinKey,
    todayKey,
} from '../../../common/domain/navigationFilter/index.ts';

export class TodoStoreError extends Error {
    constructor(message: string, data?: Record<string | number, unknown>) {
        super(message);
        this.name = 'TodoStoreError';
    }
}

type Actions = {
    // Icon
    _createIcon: (icon: UnknownObject) => void;

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
    _createIcon: (icon: UnknownObject) => {
        return set((state) => {
            const { entity, error } = validateIconEntity(icon, state);

            if (entity) {
                state.icons.byId = { ...state.icons.byId, [entity.icon_id]: entity };
                state.icons.ids = [...state.icons.ids, entity.icon_id];

                return { ...state };
            }

            throw new TodoStoreError('Ошибка валидации объекта icon', { icon, error });
        });
    },

    // Status
    _createStatus: (status: Status) => {
        return set((state) => {
            const { entity, error } = validateStatus(status);

            if (error) {
                throw new TodoStoreError('Ошибка валидации объекта Status', { status, error });
            }

            if (state.statuses.ids.includes(status.status_id) === true) {
                throw new TodoStoreError(`Нарушение уникальности ключа statuses.status_id!`, status);
            }

            if (Object.values(state.statuses.byId).find((item) => item.status == status.status)) {
                throw new TodoStoreError(`Нарушение уникальности имени статуса в statuses!`, status);
            }

            const newStatus = getStatusFomObject(entity);
            state.statuses.byId = { ...state.statuses.byId, [status.status_id]: newStatus };
            state.statuses.ids = [...state.statuses.ids, newStatus.status_id];
            return { ...state };
        });
    },

    // Category
    _createCategory: (category: Category) => {
        return set((state) => {
            const { entity, error } = validateCategory(category);

            if (error) {
                throw new TodoStoreError('Ошибка валидации объекта category', { category, error });
            }

            if (Object.values(state.categories.byId).find((item) => item.category == category.category)) {
                throw new TodoStoreError(`Нарушение уникальности имени категории в categories!`, category);
            }

            if (state.categories.ids.includes(category.category_id) === true) {
                throw new TodoStoreError(`содержит не допустимое значение categories.category_id!`, category);
            }

            if (state.icons.ids.includes(category.icon_id) === false) {
                throw new TodoStoreError(
                    `Категория "${category.category}" содержит не допустимое значение icon_id: ${category.icon_id}!`,
                    category,
                );
            }

            const newCategory = getCategoryFomObject(entity);
            state.categories.byId = { ...state.categories.byId, [category.category_id]: newCategory };
            state.categories.ids = [...state.categories.ids, newCategory.category_id];
            return { ...state };
        });
    },

    // FIXME: избавиться от дублирования кода !!!

    _updateCategory: (category: Category) => {
        return set((state) => {
            const { entity, error } = validateCategory(category);

            if (error) {
                throw new TodoStoreError('Ошибка валидации объекта category', { category, error });
            }

            if (
                Object.values(state.categories.byId).find(
                    (item) => item.category == category.category && item.category_id! == category.category_id,
                )
            ) {
                throw new TodoStoreError(`Нарушение уникальности имени категории в categories!`, category);
            }

            if (state.icons.ids.includes(category.icon_id) === false) {
                throw new TodoStoreError(
                    `Категория "${category.category}" содержит не допустимое значение icon_id: ${category.icon_id}!`,
                    category,
                );
            }

            const newCategory = getCategoryFomObject(entity);
            state.categories.byId[newCategory.category_id] = {
                ...state.categories.byId[newCategory.category_id],
                ...newCategory,
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
