import { getTodoCountForNavPanelItem } from '../../../../src/app/selectors/getTodoCountForNavPanelItem.ts';

// components
import Badge from '../../../components/NavPanel/Badge/index.tsx';

type TodosCountBadgeContainer = {
    navigationType: NavigationPanelItemType;
    id: NavigationFilterKey;
};

function TodosCountBadgeContainer(props: TodosCountBadgeContainer): JSX.Element {
    const { id, navigationType } = props;

    const count = getTodoCountForNavPanelItem(navigationType, id);

    return <>{count ? <Badge count={count} /> : null}</>;
}

export default TodosCountBadgeContainer;
