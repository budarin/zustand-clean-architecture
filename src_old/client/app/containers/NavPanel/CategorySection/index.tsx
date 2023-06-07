import { getCategoryList } from '../../../../../../src/domain/selectors/getCategoryList.ts';
import { navigationFilterTypes } from '../../../../../../src/domain/entities/navigationFilter';

// components
import NavigationPanelItemContainer from '../PanelItem';
import CategoryHeadersContainer from '../CategoryHeader';

function CategorySectionContainer() {
    const categoryIds = getCategoryList();

    return (
        <li>
            <CategoryHeadersContainer />

            <ul>
                {categoryIds.map((key) => (
                    <NavigationPanelItemContainer key={key} id={key} navigationType={navigationFilterTypes.category} />
                ))}
            </ul>
        </li>
    );
}

export default CategorySectionContainer;
