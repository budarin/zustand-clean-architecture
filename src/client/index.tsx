import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import * as api from './services/API/index.ts';
import * as logger from './services/Logger/index.ts';

import { cleanHtml } from './cleanHtml.tsx';
import { runTask } from '../common/utils/runTask.ts';
import { initStore } from './domain/entities/initStore.tsx';
import { createRootElement } from './createRootElement.tsx';
import { ONE_MINUTE } from '../common/utils/dateTime/consts.ts';
import { checkOverduedTodos } from './domain/use_cases/checkOverduedTodos.ts';

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

const { log } = console;

function InitApp() {
    cleanHtml();
    api.getTodoStore()
        .then((data) => {
            log('getTodoStore', data);

            initStore(data);

            const checkOverduedTodosTask = runTask(() => {
                checkOverduedTodos();
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
        .catch((error) => {
            log('Ошибка в Init APP');
            logger.error(error);
        });
}
