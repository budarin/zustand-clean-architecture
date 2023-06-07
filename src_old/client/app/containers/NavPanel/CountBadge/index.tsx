import { getTodoCountForNavPanelItem } from '../../../../../../src/domain/selectors/getTodoCountForNavPanelItem.ts';

// components
import Badge from '../../../../ui/NavPanel/Badge/index.tsx';

type TodosCountBadgeContainer = {
    id: NavigationFilterKey;
    navigationType: NavigationFilterType;
};

function TodosCountBadgeContainer(props: TodosCountBadgeContainer): JSX.Element {
    const { id, navigationType } = props;

    const count = getTodoCountForNavPanelItem(id, navigationType);

    return <>{count ? <Badge count={count} /> : null}</>;
}

export default TodosCountBadgeContainer;
