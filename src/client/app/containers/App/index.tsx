import { useMediaQuery } from 'usehooks-ts';
import { ToastContainer } from 'react-toastify';
import React, { useEffect, useState } from 'react';

import { useTodoStore } from '../../domain/store.tsx';
import { delay } from '../../../../common/promises/delay.ts';
import { deleteCategory } from '../../useCases/deleteCategory.ts';

// components
import App from '../../../ui/App/index.tsx';
import NavigationPanelContainer from '../NavPanel/index.tsx';
import TodoListViewContainer from '../TodoList/ListView/index.tsx';

import 'react-toastify/dist/ReactToastify.css';

import '../../../../../assets/alert.png';
import '../../../../../assets/ball.png';
import '../../../../../assets/bug.png';
import '../../../../../assets/cart.png';
import '../../../../../assets/favorite.png';
import '../../../../../assets/home.png';
import '../../../../../assets/inbox.png';
import '../../../../../assets/life.png';
import '../../../../../assets/mail.png';
import '../../../../../assets/note.png';
import '../../../../../assets/other.png';
import '../../../../../assets/page.png';
import '../../../../../assets/today.png';
import '../../../../../assets/twitter.png';
import '../../../../../assets/warning.png';
import '../../../../../assets/folder_red.png';
import '../../../../../assets/next.png';
import '../../../../../assets/note.png';
import '../../../../../assets/refresh.png';
import '../../../../../assets/trash.gif';

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
        if (matches) {
            isNavPaneOpen && setNavPaneOpen(false);
        } else {
            setNavPaneOpen(true);
        }
    }, [key, matches]);

    const onToggleNavPan = () => setNavPaneOpen((s) => !s);

    return (
        <>
            <App
                isSmallScreen={matches}
                toggleNavPane={onToggleNavPan}
                navigationPanel={<NavigationPanelContainer isOpen={isNavPaneOpen} />}
                todos={<TodoListViewContainer isOpen={!(matches && isNavPaneOpen)} />}
            />
            <ToastContainer hideProgressBar={true} />
        </>
    );
}

export default AppContainer;
