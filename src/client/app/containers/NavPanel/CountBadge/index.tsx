import { useCallback } from 'react';

import { useTodoStore } from '../../../domain/store.tsx';
import { navigationFilterTypes } from '../../../domain/navigationFilter/index.ts';

// components
import Badge from '../../../../ui/NavPanel/Badge/index.tsx';

type TodosCountBadgeContainer = {
    id: NavigationFilterKey;
    navigationType: NavigationFilterType;
};

// selectors
const getTodoCountSelector = (id: NavigationFilterKey, isCategory: boolean) =>
    useCallback(
        (state: TodosState) => {
            return isCategory
                ? state.todos.idsByCategoryId[id as Id]?.length || 0
                : state.todos.idsByFilterId[id].length;
        },
        [id, isCategory],
    );

function TodosCountBadgeContainer(props: TodosCountBadgeContainer): JSX.Element {
    const { id, navigationType } = props;
    const isCategory = navigationFilterTypes.category === navigationType;
    const count = useTodoStore(getTodoCountSelector(id, isCategory));

    return <>{count ? <Badge count={count} /> : null}</>;
}

export default TodosCountBadgeContainer;
