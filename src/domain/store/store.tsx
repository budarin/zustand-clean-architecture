import { create } from 'zustand';

import { getTodayDate } from '../../utils/dateTime/getTodayDate.ts';
import { inboxKey, overdueKey, recycleBinKey } from './navigationFilter/index.ts';

// entity method realizations
import { addIcon } from './icon/addIcon.ts';
import { addStatus } from './status/addStatus.ts';
import { addCategory } from './category/addCategory.ts';
import { updateCategory } from './category/updateCategory.ts';
import { deleteCategory } from './category/deleteCategory.ts';
import { addTodo } from './todo/addTodo.ts';
import { updateTodo } from './todo/updateTodo.ts';
import { deleteTodo } from './todo/deleteTodo.ts';
import { addToOverdueTodos } from './todo/addToOverdueTodos.ts';
import { setNavigationFilter } from './navigationFilter/setNavigationFilter.ts';

// action creators
import { createCalendarNavigationFilter } from './navigationFilter/createCalendarNavigationFilter.ts';

export type Actions = {
    // Icon
    _addIcon: typeof addIcon;

    // Status
    _addStatus: typeof addStatus;

    // Category
    _addCategory: typeof addCategory;
    _updateCategory: typeof updateCategory;
    _deleteCategory: typeof deleteCategory;

    // Todo
    _addTodo: typeof addTodo;
    _updateTodo: typeof updateTodo;
    _deleteTodo: typeof deleteTodo;
    _addToOverdueTodos: typeof addToOverdueTodos;

    // NavigationFilter
    setNavigationFilter: typeof setNavigationFilter;
};

export const useTodoStore = create<TodosState & Actions>()(() => ({
    icons: {
        byId: {
            1: { icon_id: 1, icon_name: 'page.png' },
            2: { icon_id: 2, icon_name: 'home.png' },
            3: { icon_id: 3, icon_name: 'other.png' },
            4: { icon_id: 4, icon_name: 'warning.png' },
            5: { icon_id: 5, icon_name: 'alert.png' },
            6: { icon_id: 6, icon_name: 'ball.png' },
            7: { icon_id: 7, icon_name: 'bug.png' },
            8: { icon_id: 8, icon_name: 'cart.png' },
            9: { icon_id: 9, icon_name: 'favorite.png' },
            10: { icon_id: 10, icon_name: 'inbox.png' },
            11: { icon_id: 11, icon_name: 'life.png' },
            12: { icon_id: 12, icon_name: 'mail.png' },
            13: { icon_id: 13, icon_name: 'twitter.png' },
            14: { icon_id: 14, icon_name: 'note.png' },
        },
        ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] as Readonly<Id[]>,
    },

    statuses: {
        byId: {
            1: {
                status_id: 1,
                status: 'низкий',
                color: '#808080',
            },
            2: {
                status_id: 2,
                status: 'нормальный',
                color: '#000000',
            },
            3: {
                status_id: 3,
                status: 'повышенный',
                color: '#008000',
            },
            4: {
                status_id: 4,
                status: 'высокий',
                color: '#E56353',
            },
        },
        ids: [1, 2, 3, 4] as Readonly<Id[]>,
    },

    categories: {
        byId: {
            1: {
                category_id: 1,
                icon_id: 2,
                category: 'Дом',
            },
            2: {
                category_id: 2,
                icon_id: 3,
                category: 'Работа',
            },
            3: {
                category_id: 3,
                icon_id: 6,
                category: 'Спорт',
            },
            4: {
                category_id: 4,
                icon_id: 7,
                category: 'Покупки',
            },
        },
        ids: [1, 2, 3, 4] as Readonly<Id[]>,
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
    _addIcon: addIcon,

    // Status
    _addStatus: addStatus,

    // Category
    _addCategory: addCategory,
    _updateCategory: updateCategory,
    _deleteCategory: deleteCategory,

    // Todo
    _addTodo: addTodo,
    _updateTodo: updateTodo,
    _deleteTodo: deleteTodo,
    _addToOverdueTodos: addToOverdueTodos,

    // NavigationFilter
    setNavigationFilter,
}));

export type TodosStoreState = TodosState & Actions;
