import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// utils
import { getTodayDate } from '../../utils/dateTime/getTodayDate.ts';
import { getOnlyDateTimestamp } from '../../utils/dateTime/getOnlyDateTimestamp.ts';

// entities
import { TodoStoreError } from './TodoStoreError.tsx';
import { validateTodoEntity } from '../entities/todo/validation.ts';
import { validateIconEntity } from '../entities/icon/validation.ts';
import { validateStatusEntity } from '../entities/status/validation.ts';
import { updateTodoFilters } from '../entities/todo/updateTodoFilters.ts';
import { updateTodoDueDate } from '../entities/todo/updateTodoDueDate.ts';
import { validateCategoryEntity } from '../entities/category/validation.ts';
import { updateTodoCategories } from '../entities/todo/updateTodoCategories.ts';
import { inboxKey, overdueKey, recycleBinKey } from '../entities/navigationFilter/index.ts';

// action creators
import { createCalendarNavigationFilter } from '../actionCreators/createCalendarNavigationFilter.ts';

export type Actions = {
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
    _addToOverduedTodos: (id: Todo['todo_id']) => void;

    // NavigationFilter
    setNavigationFilter: (filter: NavigationFilter) => void;
};

const devtoolsInNonProd = (__DEV__ ? devtools : (fn: any) => fn) as unknown as typeof devtools;

export const useTodoStore = create<TodosState & Actions>()(
    devtoolsInNonProd((set) => ({
        icons: {
            byId: {},
            ids: [] as Readonly<Id[]>,
        },

        statuses: {
            byId: {},
            ids: [] as Readonly<Id[]>,
        },

        categories: {
            byId: {},
            ids: [] as Readonly<Id[]>,
        },

        todos: {
            byId: {},
            ids: [] as Readonly<Id[]>,
            idsByDueDate: {},
            idsByCategoryId: {},
            idsByFilterId: {
                [inboxKey]: [] as Readonly<Id[]>,
                [recycleBinKey]: [] as Readonly<Id[]>,
                [overdueKey]: [] as Readonly<Id[]>,
            },
        },

        navigationFilter: createCalendarNavigationFilter(getTodayDate()),

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
                    const newTodo = entity as ExtendedTodo;

                    // дополняем сущность полями специфичными для стора
                    if (newTodo.due_date) {
                        newTodo.due_date_ts = getOnlyDateTimestamp(newTodo.due_date);
                        newTodo.due_date_time_ts = Date.parse(newTodo.due_date);
                    }

                    updateTodoFilters(newState.todos, newTodo);
                    updateTodoCategories(newState.todos, newTodo);
                    updateTodoDueDate(newState.todos, newTodo);

                    newState.todos.byId = { ...state.todos.byId, [newTodo.todo_id]: newTodo };
                    newState.todos.ids = [...state.todos.ids, newTodo.todo_id];

                    return newState;
                }

                throw new TodoStoreError(error, todo);
            });
        },

        _addToOverduedTodos: (id: Category['category_id']) => {
            return set((state) => {
                const newState = { ...state };
                newState.todos.idsByFilterId[overdueKey] = [...newState.todos.idsByFilterId[overdueKey], id];

                return newState;
            });
        },

        _updateTodo: (todo: UnknownObject) => {
            return set((state) => {
                const { entity, error } = validateTodoEntity(todo, state);

                if (entity) {
                    const newState = { ...state };
                    const oldTodo = state.todos.byId[entity.todo_id];
                    const newTodo = { ...state.todos.byId[entity.todo_id], ...entity } as ExtendedTodo;

                    // дополняем сущность полями специфичными для стора
                    if (newTodo.due_date) {
                        newTodo.due_date_ts = getOnlyDateTimestamp(newTodo.due_date);
                        newTodo.due_date_time_ts = Date.parse(newTodo.due_date);
                    }

                    updateTodoFilters(newState.todos, newTodo, oldTodo);
                    updateTodoCategories(newState.todos, newTodo, oldTodo);
                    updateTodoDueDate(newState.todos, newTodo, oldTodo);

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
    })),
);

export type TodosStoreState = TodosState & Actions;
