import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { cleanHtml } from './cleanHtml.tsx';
import * as API from './services/API/index.ts';
import * as logger from './services/Logger/index.ts';
import { runTask } from '../common/utils/runTask.ts';
import { initStore } from './app/domain/initStore.tsx';
import { createRootElement } from './createRootElement.tsx';
import { ONE_MINUTE } from '../common/utils/dateTime/consts.ts';
import { joyfullyGilling } from './services/Notification/index.ts';
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
    cleanHtml();

    API.getTodoStore()
        .then((data) => {
            initStore(data);

            const checkOverduedTodosTask = runTask(() => {
                checkOverduedTodos(joyfullyGilling);
            }, ONE_MINUTE);

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
