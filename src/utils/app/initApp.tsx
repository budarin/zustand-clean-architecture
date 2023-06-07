import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

// services
import * as api from '../../infrastructure/services/API/index.ts';
import * as logger from '../../infrastructure/services/Logger/index.ts';

// utils
import { runTask } from '../runTask.ts';
import { cleanHtml } from './cleanHtml.tsx';
import { initStore } from './initStore.tsx';
import { ONE_MINUTE } from '../dateTime/consts.ts';
import { createRootElement } from './createRootElement.tsx';
import { checkOverduedTodos } from '../../domain/useCases/checkOverduedTodos.ts';

// cpntainers
import AppContainer from '../../../src_old/containers/App/index.tsx';

// site icons
import './importSiteIcons.ts';

export async function initApp() {
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

        .then(() => window.loadingPromise)

        .then(() => {
            const rootElement = document.getElementById('root') || createRootElement();
            createRoot(rootElement).render(
                <>
                    <StrictMode>
                        <AppContainer />
                    </StrictMode>

                    <ToastContainer limit={3} hideProgressBar={true} />
                </>,
            );
            cleanHtml();
        })

        .catch((error) => {
            logger.error(error);
        });
}
