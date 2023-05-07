import React, { MouseEventHandler, useCallback } from 'react';

import { useTodoStore } from '../../../domain/store';
import { useCreateCategory } from '../../../useCases/useCreateCategory';
import { inboxKey, navigationFilterTypes, nextKey, recycleBinKey, todayKey } from '../../../domain/navigationFilter';

// components
import NavigationPanelItemContainer from '../PanelItem';
import NavigationPanel from '../../../../ui/NavPanel/Panel';
import CategoryHeader from '../../../../ui/NavPanel/CategoryHeader';

import './index.css';

const topFilters = [todayKey, nextKey, inboxKey];

// selectors
const getCategoryIds = (state: State) => state.categories.ids;

function NavigationPanelContainer() {
    const categoryIds = useTodoStore(getCategoryIds);
    const [inProgress, createcategory] = useCreateCategory();

    const onCreateCategory: MouseEventHandler<HTMLButtonElement> = async (event) => {
        console.log(event);
        console.log(event.target.form[0].value);

        event.target.form[1].disabled = inProgress;

        if (!inProgress) {
            try {
                await createcategory({
                    category_id: 5,
                    category: event.target.form[0].value,
                    icon_id: 1,
                });
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <NavigationPanel>
            <h4>Фильтры</h4>
            {topFilters.map((key) => (
                <NavigationPanelItemContainer key={key} id={key} navigationType={navigationFilterTypes.filter} />
            ))}

            <CategoryHeader onCreateCategory={onCreateCategory} />

            {categoryIds.map((key) => (
                <NavigationPanelItemContainer key={key} id={key} navigationType={navigationFilterTypes.category} />
            ))}

            <h4>Утилиты</h4>

            <NavigationPanelItemContainer
                key={recycleBinKey}
                id={recycleBinKey}
                navigationType={navigationFilterTypes.filter}
            />
        </NavigationPanel>
    );
}

export default NavigationPanelContainer;
