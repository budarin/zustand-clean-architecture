import { navigationFilterTypes } from '../../../domain/navigationFilter/index.ts';
import { getTodoCountByCategory } from '../../../selectors/getTodoCountByCategory.ts';

// components
import Badge from '../../../../ui/NavPanel/Badge/index.tsx';

type TodosCountBadgeContainer = {
    id: NavigationFilterKey;
    navigationType: NavigationFilterType;
};

function TodosCountBadgeContainer(props: TodosCountBadgeContainer): JSX.Element {
    const { id, navigationType } = props;

    const isCategory = navigationFilterTypes.category === navigationType;
    const count = getTodoCountByCategory(id, isCategory);

    return <>{count ? <Badge count={count} /> : null}</>;
}

export default TodosCountBadgeContainer;
