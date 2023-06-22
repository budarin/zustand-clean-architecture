import { useLogger } from '../../services/adapters/useLogger';

const logger = useLogger();

export async function handleSetupServiceWorker() {
    if ('serviceWorker' in navigator) {
        // Проверяем, установлен ли сервис-воркер
        if (!navigator.serviceWorker.controller) {
            await new Promise((resolve) => {
                // Дожидаемся момента, когда сервис-воркер вступит в силу
                navigator.serviceWorker.addEventListener('controllerchange', resolve);
            });
        } else {
            // Сервис-воркер уже установлен, вызываем его метод update()
            const registration = await navigator.serviceWorker.ready;
            registration.update();

            await new Promise((resolve) => {
                const serviceWorker = registration.waiting;

                if (serviceWorker) {
                    const stateChangeListener = () => {
                        if (serviceWorker.state === 'activated') {
                            registration.removeEventListener('statechange', stateChangeListener);
                            resolve(true);
                        }
                    };
                    registration.addEventListener('statechange', stateChangeListener);
                } else {
                    resolve(true);
                }
            });
        }
    } else {
        logger.error('Сервис-воркеры не поддерживаются в текущем браузере.');
    }
}
