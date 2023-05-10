export const serverInitialState: EntitiesPayload = {
    icons: [
        {
            icon_id: 1,
            icon_name: 'folder.png',
        },
        {
            icon_id: 2,
            icon_name: 'home.png',
        },
        {
            icon_id: 3,
            icon_name: 'work.png',
        },
        {
            icon_id: 4,
            icon_name: 'sport.png',
        },
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
            color: '#ff0000',
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
            icon_id: 4,
            category: 'Здоровье',
        },
        {
            category_id: 4,
            icon_id: 4,
            category: 'Фуфло',
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
            due_date: new Date('01/05/2023').valueOf(),
        },
        {
            todo_id: 3,
            status_id: 3,
            category_id: 3,
            todo: 'Todo3',
            due_date: new Date('05/08/2023').valueOf(),
            completed: true,
            deleted: false,
        },
        {
            todo_id: 4,
            status_id: 4,
            category_id: 1,
            todo: 'Todo4',
            due_date: new Date('02/02/2023').valueOf(),
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
