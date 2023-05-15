import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { initStore } from './app/domain/initStore.tsx';

// components
import { ToastContainer } from 'react-toastify';
import AppContainer from './app/containers/App/index.tsx';

initStore();

function createRootElement() {
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    return root;
}

let rootElement = document.getElementById('root') || createRootElement();

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/sw.js')
            .then((registration) => {
                return navigator.serviceWorker.ready;
            })
            .then(() => {
                createRoot(rootElement).render(
                    <>
                        <StrictMode>
                            <AppContainer />
                        </StrictMode>

                        <ToastContainer hideProgressBar={true} />
                    </>,
                );
            })
            .catch((error) => {
                console.error('Ошибка при регистрации Service Worker:', error);
            });
    });
}
