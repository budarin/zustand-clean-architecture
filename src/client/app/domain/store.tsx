import { create } from 'zustand';

import { TodoStoreError } from './TodoStoreError.tsx';
import { createSelectors } from './createSelectors.ts';
import { updateTodoFilters } from './todo/updateTodoFilters.ts';
import { updateTodoOverdue } from './todo/updateTodoOverdue.ts';
import { validateTodoEntity } from './todo/validateTodoEntity.ts';
import { validateIconEntity } from './icon/validateIconEntity.ts';
import { updateTodoCategories } from './todo/updateTodoCategories.ts';
import { validateStatusEntity } from './status/validateStatusEntity.ts';
import { validateCategoryEntity } from './category/validateCategoryEntity.ts';

import { getNavigationFilterWithCalendarDate, inboxKey, overdueKey, recycleBinKey } from './navigationFilter/index.ts';

type Actions = {
    // Icon
    _addIcon: (icon: UnknownObject) => void;

    // Status
    _addStatus: (status: UnknownObject) => void;

    // Category
    _addCategory: (category: UnknownObject) => void;
    _updateCategory: (category: UnknownObject) => void;
    _deleteCategory: (id: Category['category_id']) => void;

    // Todo
    _addTodo: (todo: UnknownObject) => void;
    _updateTodo: (todo: UnknownObject) => void;
    _deleteTodo: (id: Todo['todo_id']) => void;

    // NavigationFilter
    setNavigationFilter: (filter: NavigationFilter) => void;
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
        idsByDueDate: {},
        idsByCategoryId: {},
        idsByFilterId: {
            [inboxKey]: [],
            [recycleBinKey]: [],
            [overdueKey]: [],
        },
    },

    navigationFilter: getNavigationFilterWithCalendarDate(new Date()),

    // Icon
    _addIcon: (icon: UnknownObject) => {
        return set((state) => {
            const { entity, error } = validateIconEntity(icon, state);

            if (entity) {
                const newState = { ...state };

                newState.icons.byId = { ...state.icons.byId, [entity.icon_id]: entity };
                newState.icons.ids = [...state.icons.ids, entity.icon_id];

                return newState;
            }

            throw new TodoStoreError(error, icon);
        });
    },

    // Status
    _addStatus: (status: UnknownObject) => {
        return set((state) => {
            const { entity, error } = validateStatusEntity(status, state);

            if (entity) {
                if (state.statuses.ids.includes(entity.status_id) === true) {
                    throw new TodoStoreError(`Нарушение уникальности ключа statuses.status_id!`, status);
                }

                const newState = { ...state };

                newState.statuses.byId = { ...state.statuses.byId, [entity.status_id]: entity };
                newState.statuses.ids = [...state.statuses.ids, entity.status_id];

                return newState;
            }

            throw new TodoStoreError(error, status);
        });
    },

    // Category
    _addCategory: (category: UnknownObject) => {
        return set((state) => {
            const { entity, error } = validateCategoryEntity(category, state);

            if (entity) {
                const newState = { ...state };

                newState.categories.byId = { ...state.categories.byId, [entity.category_id]: entity };
                newState.categories.ids = [...state.categories.ids, entity.category_id];

                return newState;
            }

            throw new TodoStoreError(error, category);
        });
    },

    _updateCategory: (category: UnknownObject) => {
        return set((state) => {
            const { entity, error } = validateCategoryEntity(category, state);

            if (entity) {
                const newState = { ...state };

                newState.categories.byId[entity.category_id] = {
                    ...state.categories.byId[entity.category_id],
                    ...entity,
                };
                return newState;
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

            const newState = { ...state };

            newState.categories.byId = restById;

            const ids = state.categories.ids;
            const idx = ids.indexOf(id);

            if (idx > -1) {
                newState.categories.ids = ids.filter((item) => item !== id);
            }

            // удалить в todos idsByCategoryId так как там нет todos
            const { [id]: del, ...restIdsByCategoryId } = state.todos.idsByCategoryId;
            newState.todos.idsByCategoryId = restIdsByCategoryId;

            return newState;
        });
    },

    // Todo
    _addTodo: (todo: UnknownObject) => {
        return set((state) => {
            const { entity, error } = validateTodoEntity(todo, state);

            if (entity) {
                if (state.todos.ids.includes(entity.todo_id) === true) {
                    throw new TodoStoreError('Нарушение уникальности ключа todos!', { todo });
                }

                const newState = { ...state };

                updateTodoFilters(newState.todos, entity);
                updateTodoCategories(newState.todos, entity);
                updateTodoOverdue(newState.todos, entity);

                newState.todos.byId = { ...state.todos.byId, [entity.todo_id]: entity };
                newState.todos.ids = [...state.todos.ids, entity.todo_id];

                return newState;
            }

            throw new TodoStoreError(error, todo);
        });
    },

    _updateTodo: (todo: UnknownObject) => {
        return set((state) => {
            const { entity, error } = validateTodoEntity(todo, state);

            if (entity) {
                const newState = { ...state };
                const oldTodo = state.todos.byId[entity.todo_id];
                const newTodo = { ...state.todos.byId[entity.todo_id], ...entity };

                updateTodoFilters(newState.todos, newTodo, oldTodo);
                updateTodoCategories(newState.todos, newTodo, oldTodo);
                updateTodoOverdue(newState.todos, newTodo, oldTodo);

                newState.todos.byId[entity.todo_id] = newTodo;

                return newState;
            }

            throw new TodoStoreError(error, todo);
        });
    },

    _deleteTodo: (id: Todo['todo_id']) => {
        return set((state) => {
            const newState = { ...state };
            const { [id]: del, ...rest } = state.todos.byId;

            newState.todos.byId = rest;

            const ids = state.todos.ids;
            let idx = ids.indexOf(id);

            if (idx > -1) {
                newState.todos.ids = ids.filter((item) => item !== id);
            }

            return newState;
        });
    },

    // NavigationFilter
    setNavigationFilter: (filter: NavigationFilter) => {
        return set((state) => {
            if (state.navigationFilter.key === filter.key) {
                return state;
            }

            const newState = { ...state };

            newState.navigationFilter = filter;

            return newState;
        });
    },
}));

export const useTodoStore = createSelectors(todoStore);
