import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { logger } from './services/logger';
import { getTodoStore } from './services/api/api.ts';
import { initStore } from './app/domain/initStore.tsx';

// components
import { ToastContainer } from 'react-toastify';
import AppContainer from './app/containers/App/index.tsx';

declare global {
    interface Window {
        loading: Promise<void>;
    }
}

function loadTodoStore() {
    getTodoStore()
        .then((data) => {
            initStore(data);
        })
        .catch((error) => logger.error(error));
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
        if (!registration) {
            return;
        }

        if (registration.active?.state === 'activated') {
            loadTodoStore();
        } else {
            registration.active?.addEventListener('statechange', () => {
                loadTodoStore();
            });
        }
    });
}

function createRootElement() {
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    return root;
}

let rootElement = document.getElementById('root') || createRootElement();

window.loading.then(() => {
    createRoot(rootElement).render(
        <>
            <StrictMode>
                <AppContainer />
            </StrictMode>

            <ToastContainer limit={3} hideProgressBar={true} />
        </>,
    );
});
