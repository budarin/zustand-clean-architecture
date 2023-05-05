import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import { deleteCategory } from '../../../useCases/deleteCategory.ts';

// components
import App from '../../components/App/index.tsx';
import TodoListViewContainer from '../TodoListView/index.tsx';
import NavigationPanelContainer from '../NavigationPanel/index.tsx';

import 'react-toastify/dist/ReactToastify.css';

function AppContainer() {
    useEffect(() => {
        const timer = setTimeout(async () => {
            await deleteCategory(4);
        }, 5000);

        () => clearTimeout(timer);
    }, []);

    return (
        <>
            <App navigationPanel={<NavigationPanelContainer />} todos={<TodoListViewContainer />} />
            <ToastContainer hideProgressBar={true} />
        </>
    );
}

export default AppContainer;
