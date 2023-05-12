import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

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
    useEffect(() => {
        delay(1000).then(() => {
            deleteCategory(4);
        });
    });

    return (
        <>
            <App navigationPanel={<NavigationPanelContainer />} todos={<TodoListViewContainer />} />
            <ToastContainer hideProgressBar={true} />
        </>
    );
}

export default AppContainer;
