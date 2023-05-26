import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { logger } from './services/logger';
import { getTodoStore } from './services/api/api.ts';
import { initStore } from './app/domain/initStore.tsx';

// components
import { ToastContainer } from 'react-toastify';
import AppContainer from './app/containers/App/index.tsx';

import './importSiteIcons.ts';

declare global {
    interface Window {
        loading: Promise<boolean>;
        scriptLoadError?: () => void;
    }
}

function createRootElement() {
    const root = document.createElement('div');

    root.id = 'root';
    document.body.appendChild(root);

    return root;
}

function InitApp() {
    if (window.scriptLoadError) {
        localStorage.removeItem('reloadOnError');
        window.removeEventListener('error', window.scriptLoadError);
        window.scriptLoadError = undefined;
    }

    document.getElementById('initialScript')?.remove();

    getTodoStore()
        .then((data) => {
            initStore(data);
        })
        .then(() => {
            let rootElement = document.getElementById('root') || createRootElement();

            window.loading.then((doWait) => {
                createRoot(rootElement).render(
                    <>
                        <StrictMode>
                            <AppContainer waitForLoadingAnimation={doWait} />
                        </StrictMode>

                        <ToastContainer limit={3} hideProgressBar={true} />
                    </>,
                );
            });
        })
        .catch((error) => logger.error(error));
}

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
