import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

// services
import * as api from '../../infrastructure/services/API/index.ts';
import * as logger from '../../infrastructure/services/Logger/index.ts';
import * as kvStorage from '../../infrastructure/services/KVStorage/index.ts';

// utils
import { runTask } from '../runTask.ts';
import { initStore } from './initStore.tsx';
import { ONE_MINUTE } from '../dateTime/consts.ts';
import { createRootElement } from './createRootElement.tsx';
import { checkOverduedTodos } from '../../domain/useCases/checkOverduedTodos.ts';

// cpntainers
import AppContainer from '../../ui/containers/App/index.tsx';

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
            kvStorage.remove('reloadOnError');
        })

        .catch((error) => {
            logger.error(error);
        });
}
