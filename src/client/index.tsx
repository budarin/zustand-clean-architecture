import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { initStore } from './app/domain/initStore.tsx';

// components
import AppContainer from './app/containers/App/index.tsx';
import { ToastContainer } from 'react-toastify';

initStore();

function createRootElement() {
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    return root;
}

let rootElement = document.getElementById('root') || createRootElement();

createRoot(rootElement).render(
    <>
        {/* <StrictMode> */}
        <AppContainer />,{/* </StrictMode> */}
        ,
        <ToastContainer hideProgressBar={true} />
    </>,
);
