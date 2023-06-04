import { ReactNode } from 'react';

import './index.css';
import TodoListHeader from './TodoListHeader';

type TodoList = {
    isOpen: boolean;
    title: string;
    icon: string;
    count: number;
    children: ReactNode;
};

function TodoList(props: TodoList) {
    const { isOpen, title, icon, count, children } = props;

    return (
        <div className="TodoListView" style={{ display: isOpen ? 'block' : 'none' }}>
            <TodoListHeader title={title} icon={icon} count={count} />
            <ul className="TodoListView-List">{children}</ul>
        </div>
    );
}

export default TodoList;
