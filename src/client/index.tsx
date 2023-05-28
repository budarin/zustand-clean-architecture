import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { logger } from './services/logger';
import { runTask } from '../common/utils/runTask.ts';
import { getTodoStore } from './services/api/api.ts';
import { initStore } from './app/domain/initStore.tsx';
import { createRootElement } from './createRootElement.tsx';
import { ONE_MINUTE } from '../common/utils/dateTime/consts.ts';
import { checkOverduedTodos } from './app/useCases/checkOverduedTodos.ts';

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
    // очищаем html и localStorage
    if (window.scriptLoadError) {
        window.removeEventListener('error', window.scriptLoadError);
        window.scriptLoadError = undefined;
    }
    localStorage.removeItem('reloadOnError');
    document.getElementById('initialScript')?.remove();

    // загружаем данные
    getTodoStore()
        .then((data) => {
            initStore(data);

            const checkOverduedTodosTask = runTask(checkOverduedTodos, ONE_MINUTE);

            window.addEventListener('beforeunload', () => {
                checkOverduedTodosTask.stop();
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
