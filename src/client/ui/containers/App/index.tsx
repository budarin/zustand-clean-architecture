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
            // const rnd = Math.random();
            // const b = rnd < 0.5;
            // dispatch(
            //     updateTodo({
            //         id: 1,
            //         todo: String(rnd),
            //         deleted: b,
            //         completed: b,
            //     }),
            // );
            // dispatch(deleteTodo(5));

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
