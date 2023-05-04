import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import { useTodoStore } from '../../store/index.tsx';

// components
import App from '../../components/App/index.tsx';
import TodoListViewContainer from '../TodoListView/index.tsx';
import NavigationPanelContainer from '../NavigationPanel/index.tsx';

import 'react-toastify/dist/ReactToastify.css';

function AppContainer() {
    const deleteCategory = useTodoStore((state) => state.deleteCategory);

    useEffect(() => {
        // const timer = setTimeout(() => {
        //     const rnd = Math.random();
        //     const b = rnd < 0.5;
        //     dispatch(
        //         updateTodo({
        //             id: 1,
        //             todo: String(rnd),
        //             deleted: b,
        //             completed: b,
        //         }),
        //     );
        //     dispatch(deleteTodo(5));
        // }, 5000);
        // () => clearTimeout(timer);
        // deleteCategory(4);
    }, []);

    return (
        <>
            <App navigationPanel={<NavigationPanelContainer />} todos={<TodoListViewContainer />} />
            <ToastContainer hideProgressBar={true} />
        </>
    );
}

export default AppContainer;
