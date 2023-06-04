import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import * as api from '../../src_old/client/services/API/index.ts';
import * as logger from '../../src_old/client/services/Logger/index.ts';

import { cleanHtml } from './cleanHtml.tsx';
import { runTask } from '../../src_old/common/utils/runTask.ts';
import { initStore } from '../../src_old/client/domain/entities/initStore.tsx';
import { createRootElement } from './createRootElement.tsx';
import { ONE_MINUTE } from '../../src_old/common/utils/dateTime/consts.ts';
import { checkOverduedTodos } from '../../src_old/client/domain/use_cases/checkOverduedTodos.ts';

// components
import { ToastContainer } from 'react-toastify';
import AppContainer from '../../src_old/client/app/containers/App/index.tsx';

import '../../src_old/client/importSiteIcons.ts';

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
    api.getTodoStore()
        .then((data) => {
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
            logger.error(error);
        });
}
