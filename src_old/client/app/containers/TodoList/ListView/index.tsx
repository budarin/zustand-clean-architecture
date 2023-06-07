import { IconsByNameKey, iconsByName } from '../../iconsByName.ts';
import { getTodoListViewProps } from '../../../../../../src/domain/selectors/getTodoListViewProps.ts';

// components
import TodoListContainer from '../index.tsx';
import TodoList from '../../../../ui/TodoList/index.tsx';

type TodoListViewContainer = {
    isOpen: boolean;
};

function TodoListViewContainer(props: TodoListViewContainer): JSX.Element {
    const { isOpen } = props;
    const { icon, title, count } = getTodoListViewProps();
    const iconName = iconsByName[icon as IconsByNameKey];

    return (
        <TodoList isOpen={isOpen} title={title} icon={iconName} count={count}>
            <TodoListContainer />
        </TodoList>
    );
}

export default TodoListViewContainer;
