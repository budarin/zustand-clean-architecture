import { getDateOverToday } from '../../utils/dateTime/getDateOverToday.ts';
import { getTodayInMinutes } from '../../utils/dateTime/getTodayInMinutes.ts';

export const serverInitialState: Entities = {
    icons: [
        { icon_id: 1, icon_name: 'page.png' },
        { icon_id: 2, icon_name: 'home.png' },
        { icon_id: 3, icon_name: 'other.png' },
        { icon_id: 4, icon_name: 'warning.png' },
        { icon_id: 5, icon_name: 'alert.png' },
        { icon_id: 6, icon_name: 'ball.png' },
        { icon_id: 7, icon_name: 'bug.png' },
        { icon_id: 8, icon_name: 'cart.png' },
        { icon_id: 9, icon_name: 'favorite.png' },
        { icon_id: 10, icon_name: 'inbox.png' },
        { icon_id: 11, icon_name: 'life.png' },
        { icon_id: 12, icon_name: 'mail.png' },
        { icon_id: 13, icon_name: 'twitter.png' },
        { icon_id: 14, icon_name: 'note.png' },
    ],
    statuses: [
        {
            status_id: 1,
            status: 'низкий',
            color: '#808080',
        },
        {
            status_id: 2,
            status: 'нормальный',
            color: '#000000',
        },
        {
            status_id: 3,
            status: 'повышенный',
            color: '#008000',
        },
        {
            status_id: 4,
            status: 'высокий',
            color: '#E56353',
        },
    ],
    categories: [
        {
            category_id: 1,
            icon_id: 3,
            category: 'Работа',
        },
        {
            category_id: 2,
            icon_id: 2,
            category: 'Дом',
        },
        {
            category_id: 3,
            icon_id: 6,
            category: 'Здоровье',
        },
        {
            category_id: 4,
            icon_id: 7,
            category: 'Фигня',
        },
    ],
    todos: [
        {
            todo_id: 1,
            status_id: 1,
            category_id: 1,
            todo: 'Todo1',
            deleted: false,
        },
        {
            todo_id: 2,
            status_id: 2,
            category_id: 2,
            todo: 'Hover your mouse over a project or item and click the icon on the right side of the item for more',
            due_date: getDateOverToday(-1),
        },
        {
            todo_id: 3,
            status_id: 3,
            category_id: 3,
            todo: 'Todo3',
            due_date: getTodayInMinutes(1),
        },
        {
            todo_id: 4,
            status_id: 4,
            category_id: 1,
            todo: 'Todo4',
            due_date: getDateOverToday(1),
            completed: true,
            deleted: false,
        },
        {
            todo_id: 5,
            status_id: 4,
            todo: 'Todo5',
        },
        {
            todo_id: 6,
            status_id: 4,
            todo: 'Todo6',
            completed: true,
            deleted: false,
        },
        {
            todo_id: 7,
            status_id: 2,
            todo: 'Todo7',
            completed: true,
            deleted: true,
        },
    ],
};
