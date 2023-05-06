import React from 'react';
import { ToastContainer } from 'react-toastify';

// components
import App from '../../../components/App/index.tsx';
import TodoListViewContainer from '../TodoListView/index.tsx';
import NavigationPanelContainer from '../NavigationPanel/index.tsx';

import 'react-toastify/dist/ReactToastify.css';

function AppContainer() {
    return (
        <>
            <App navigationPanel={<NavigationPanelContainer />} todos={<TodoListViewContainer />} />
            <ToastContainer hideProgressBar={true} />
        </>
    );
}

export default AppContainer;
