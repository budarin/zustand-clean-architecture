import React from 'react';

import { useTodoStore } from '../../../domain/store';
import { navigationFilterTypes } from '../../../../../common/domain/navigationFilter';

import NavigationPanelItemContainer from '../PanelItem';
import CategoryHeadersContainer from './CategoryHeader';

// selectors
const getCategoryIds = (state: State) => state.categories.ids;

function CategorySectionContainer() {
    const categoryIds = useTodoStore(getCategoryIds);

    return (
        <>
            <CategoryHeadersContainer />

            {categoryIds.map((key) => (
                <NavigationPanelItemContainer key={key} id={key} navigationType={navigationFilterTypes.category} />
            ))}
        </>
    );
}

export default CategorySectionContainer;
