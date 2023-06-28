import { getDateOverToday } from '../dateTime/getDateOverToday';
import { getTodayInMinutes } from '../dateTime/getTodayInMinutes';

export const todoSamples = [
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
];
