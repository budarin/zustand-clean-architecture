import React, { useState } from 'react';

import { useTodoStore } from '../../../domain/store';
import {
    inboxKey,
    navigationFilterTypes,
    nextKey,
    recycleBinKey,
    todayKey,
} from '../../../domain/utils/navigationFilter';

// components
import NavigationPanel from '../../../../ui/NavPanel/Panel';
import NavigationPanelItemContainer from '../PanelItem';

import './index.css';

const topFilters = [todayKey, nextKey, inboxKey];

// selectors
const getCategoryIds = (state: State) => state.categories.ids;

function NavigationPanelContainer(): JSX.Element {
    const [isOpen, setOpen] = useState<boolean>(false);
    const categoryIds = useTodoStore(getCategoryIds);

    return (
        <NavigationPanel>
            <h4>Фильтры</h4>
            {topFilters.map((key) => (
                <NavigationPanelItemContainer key={key} id={key} navigationType={navigationFilterTypes.filter} />
            ))}

            <h4>Категории</h4>
            <button
                className="navPanel-addd-button"
                title="Добавить категорию"
                onClick={() => setOpen((state) => !state)}
            >
                <svg className="navPanel-addd-button-icon" width="24" height="24" viewBox="0 0 24 24">
                    <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M8 12H16"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12 16V8"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            <form className="navPanel-form" style={{ display: isOpen ? 'block' : 'none' }}>
                <input type="text" maxLength={15} className="navPanel-form-input" />
                <button type="button" className="navPanel-form-button">
                    Добавить
                </button>
            </form>

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
