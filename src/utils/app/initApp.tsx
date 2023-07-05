import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

// services
import { getApi } from '../../services/adapters/getApi.ts';
import { getLogger } from '../../services/adapters/getLogger.ts';
import { getKVStorage } from '../../services/adapters/getKVStorage.ts';

// utils
import { initStore } from './initStore.tsx';
import { runTask } from '../tasks/runTask.ts';
import { cleanUpHtml } from './cleanUpHtml.ts';
import { ONE_MINUTE } from '../dateTime/consts.ts';
import { createRootElement } from './createRootElement.tsx';
import { checkOverdueTodos } from '../../app/useCases/checkOverdueTodos.ts';
import { setOverdueInBadge } from '../../app/useCases/setOverdueInBadge.ts';

// cpntainers
import AppContainer from '../../ui/containers/App/index.tsx';

const api = getApi();
const logger = getLogger();
const kvStorage = getKVStorage();

export async function initApp(): Promise<void> {
    api.getTodoStore()
        .then(({ result, error }) => {
            // console.log({ result, error });

            if (result) {
                initStore(result);
                setOverdueInBadge();
                window.addEventListener('beforeunload', runTask(checkOverdueTodos, ONE_MINUTE).stop);
            } else {
                throw error;
            }
        })
        .then(() => window.loadingPromise)
        .then(() => {
            const rootElement = document.querySelector('#root') || createRootElement();
            createRoot(rootElement).render(
                <>
                    <StrictMode>
                        <AppContainer />
                    </StrictMode>

                    <ToastContainer limit={3} hideProgressBar={true} />
                </>,
            );
        })
        .then(() => {
            kvStorage.remove('reloadOnError');
            cleanUpHtml();
        })
        .catch((error) => {
            if (error instanceof Error) {
                logger.error({ error, stack: error.stack });
            } else {
                logger.error(error);
            }
        });
}
