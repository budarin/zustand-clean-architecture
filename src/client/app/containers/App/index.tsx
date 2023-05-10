import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import { delay } from '../../../../common/promises/delay.ts';
import { deleteCategory } from '../../useCases/deleteCategory.ts';

// components
import App from '../../../ui/App/index.tsx';
import TodoListViewContainer from '../TodoList/ListView/index.tsx';
import NavigationPanelContainer from '../NavPanel/index.tsx';

import 'react-toastify/dist/ReactToastify.css';

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
