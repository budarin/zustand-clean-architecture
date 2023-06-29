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
import { isAppleMobile } from '../browsers/isAppleMobile.ts';
import { checkOverdueTodos } from '../../app/useCases/checkOverdueTodos.ts';
import { setOverdueInBadge } from '../../app/useCases/setOverdueInBadge.ts';
import { setUpPwaInstall } from '../service-worker/pwa-install/setUpPwaInstall.ts';
import { isStandaloneMode } from '../service-worker/pwa-install/isStandaloneMode.ts';

// cpntainers
import AppContainer from '../../ui/containers/App/index.tsx';

const api = useApi();
const logger = useLogger();

export async function initApp() {
    api.getTodoStore()
        .then((data) => {
            // console.log(data);

            initStore(data);
            setOverdueInBadge();

            const checkOverduedTodosTask = runTask(checkOverdueTodos, ONE_MINUTE);
            window.addEventListener('beforeunload', checkOverduedTodosTask.stop);
        })

        .then(() => window.loadingPromise)

        .then(() => {
            const kvStorage = useKVStorage();
            const rootElement = document.querySelector('#root') || createRootElement();

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
        .then(() => {
            // В FireFox и десктопный Safari вообще не поддерживают pwa - игнорируем их

            // В Safari на iOS нет пока события 'beforeInstallPromptEvent', но у него можно добавить ярлык на экран
            // и это будет полноценное pwa приложение - поэтому будем показывать юзеру диалог с инструкциями
            if ('serviceWorker' in navigator && isAppleMobile() && isStandaloneMode() === false) {
                setTimeout(setUpPwaInstall, 3000);
            }
        })
        .catch((error) => {
            logger.error({ error, stack: error.stack });
        });
}
