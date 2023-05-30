import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { cleanHtml } from './cleanHtml.tsx';
import * as API from './services/API/index.ts';
import * as logger from './services/Logger/index.ts';
import { initStore } from './app/domain/initStore.tsx';
import { createRootElement } from './createRootElement.tsx';
import { onServiceWorkerMessage } from './onServiceWorkerMessage.ts';

// components
import { ToastContainer } from 'react-toastify';
import AppContainer from './app/containers/App/index.tsx';

import './importSiteIcons.ts';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
        if (!registration) {
            return;
        }

        if (registration.active?.state === 'activated') {
            InitApp();
        } else {
            registration.active?.addEventListener('statechange', () => {
                InitApp();
            });
        }
    });
}

function InitApp() {
    cleanHtml();

    API.getTodoStore()
        .then((data) => {
            navigator.serviceWorker.onmessage = onServiceWorkerMessage;

            initStore(data);

            window.addEventListener('beforeunload', () => {
                navigator.serviceWorker.onmessage = null;
            });
        })
        .then(() => {
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
        })
        .catch((error) => logger.error(error));
}
