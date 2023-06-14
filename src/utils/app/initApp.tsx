import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

// services
import { useApi } from '../../services/adapters/useApi.ts';
import { useLogger } from '../../services/adapters/useLogger.ts';
import { useKVStorage } from '../../services/adapters/useKVStorage.ts';

// utils
import { runTask } from '../runTask.ts';
import { initStore } from './initStore.tsx';
import { ONE_MINUTE } from '../dateTime/consts.ts';
import { createRootElement } from './createRootElement.tsx';
import { checkOverdueTodos, setOverdueInBadge } from '../../app/useCases/checkOverduedTodos.ts';

// cpntainers
import AppContainer from '../../ui/containers/App/index.tsx';
import { showInstallPwaDialog } from './showInstallPwaDialog.ts';

export async function initApp() {
    const api = useApi();
    const logger = useLogger();
    const kvStorage = useKVStorage();

    api.getTodoStore()
        .then((data) => {
            initStore(data);

            setOverdueInBadge();

            const checkOverduedTodosTask = runTask(() => {
                checkOverdueTodos();
            }, ONE_MINUTE);

            window.addEventListener('beforeunload', () => {
                checkOverduedTodosTask.stop();
            });

            setTimeout(() => {
                showInstallPwaDialog();
            }, 3000);
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
            kvStorage.removeItem('reloadOnError');
        })

        .catch((error) => {
            logger.error({ error, stack: error.stack });
        });
}
