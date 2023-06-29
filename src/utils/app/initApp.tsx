import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

// services
import { useApi } from '../../services/adapters/useApi.ts';
import { useLogger } from '../../services/adapters/useLogger.ts';
import { useKVStorage } from '../../services/adapters/useKVStorage.ts';

// utils
import { initStore } from './initStore.tsx';
import { runTask } from '../tasks/runTask.ts';
import { ONE_MINUTE } from '../dateTime/consts.ts';
import { createRootElement } from './createRootElement.tsx';
import { checkOverdueTodos } from '../../app/useCases/checkOverdueTodos.ts';
import { setOverdueInBadge } from '../../app/useCases/setOverdueInBadge.ts';

// cpntainers
import AppContainer from '../../ui/containers/App/index.tsx';
import { cleanUpHtml } from './cleanUpHtml.ts';

const api = useApi();
const logger = useLogger();
const kvStorage = useKVStorage();

export async function initApp() {
    api.getTodoStore()
        .then((data) => {
            // console.log(data);
            initStore(data);
            setOverdueInBadge();
            window.addEventListener('beforeunload', runTask(checkOverdueTodos, ONE_MINUTE).stop);
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
            logger.error({ error, stack: error.stack });
        });
}
