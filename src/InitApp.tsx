import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

// services
import * as api from '../src_old/client/services/API/index.ts';
import * as logger from '../src_old/client/services/Logger/index.ts';

import { cleanHtml } from './cleanHtml.tsx';
import { createRootElement } from './createRootElement.tsx';
import { runTask } from '../src_old/common/utils/runTask.ts';
import { ONE_MINUTE } from '../src_old/common/utils/dateTime/consts.ts';
import { initStore } from '../src_old/client/domain/entities/initStore.tsx';
import { checkOverduedTodos } from '../src_old/client/domain/use_cases/checkOverduedTodos.ts';

// cpntainers
import AppContainer from '../src_old/client/app/containers/App/index.tsx';

export function InitApp() {
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

            return window.loading.then(() => {
                createRoot(rootElement).render(
                    <>
                        <StrictMode>
                            <AppContainer />
                        </StrictMode>

                        <ToastContainer limit={3} hideProgressBar={true} />
                    </>,
                );

                cleanHtml();
            });
        })
        .catch((error) => {
            logger.error(error);
        });
}
