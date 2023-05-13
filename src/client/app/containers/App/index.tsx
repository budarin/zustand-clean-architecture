import { useMediaQuery } from 'usehooks-ts';
import React, { useEffect, useState } from 'react';

import { useTodoStore } from '../../domain/store.tsx';
import { delay } from '../../../../common/promises/delay.ts';
import { deleteCategory } from '../../useCases/deleteCategory.ts';

// components
import App from '../../../ui/App/index.tsx';
import NavigationPanelContainer from '../NavPanel/index.tsx';
import TodoListViewContainer from '../TodoList/ListView/index.tsx';

import 'react-toastify/dist/ReactToastify.css';

function AppContainer() {
    const { key } = useTodoStore.use.navigationFilter();
    const [isNavPaneOpen, setNavPaneOpen] = useState(false);
    const matches = useMediaQuery('(max-width: 640px)');

    useEffect(() => {
        let mounted = true;

        delay(1000).then(() => {
            mounted && deleteCategory(4);
        });

        return () => {
            mounted = false;
        };
    }, []);

    useEffect(() => {
        // если маленький экран - прячем навигацию
        if (matches) {
            isNavPaneOpen && setNavPaneOpen(false);
        } else {
            setNavPaneOpen(true);
        }
    }, [key, matches]);

    const onToggleNavPan = () => setNavPaneOpen((s) => !s);

    return (
        <App
            isOpen={isNavPaneOpen}
            isSmallScreen={matches}
            toggleNavPane={onToggleNavPan}
            navigationPanel={<NavigationPanelContainer isOpen={isNavPaneOpen} />}
            todos={<TodoListViewContainer isOpen={!(matches && isNavPaneOpen)} />}
        />
    );
}

export default AppContainer;
