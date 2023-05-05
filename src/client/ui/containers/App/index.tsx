import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import { useDeleteCategory } from '../../../useCases/useDeleteCategory.ts';

// components
import App from '../../components/App/index.tsx';
import TodoListViewContainer from '../TodoListView/index.tsx';
import NavigationPanelContainer from '../NavigationPanel/index.tsx';

import 'react-toastify/dist/ReactToastify.css';

function AppContainer() {
    const [{ inProgress, error }, doDelete] = useDeleteCategory();

    useEffect(() => {
        doDelete(4);
    }, []);

    return (
        <>
            {inProgress ? 'processing...' : null}
            {error ? `Ашипка: ${error}` : null}
            <App navigationPanel={<NavigationPanelContainer />} todos={<TodoListViewContainer />} />
            <ToastContainer hideProgressBar={true} />
        </>
    );
}

export default AppContainer;
