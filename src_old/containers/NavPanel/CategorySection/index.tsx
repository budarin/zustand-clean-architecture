import { getCategoryList } from '../../../../src/app/selectors/getCategoryList.ts';
import { navigationFilterTypes } from '../../../../src/domain/entities/navigationFilter/index.ts';

// components
import NavigationPanelItemContainer from '../PanelItem/index.tsx';
import CategoryHeadersContainer from '../CategoryHeader/index.tsx';

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
