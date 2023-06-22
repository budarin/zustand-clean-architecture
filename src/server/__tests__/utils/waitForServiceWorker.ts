import { Page } from '@playwright/test';

export async function waitForServiceWorker(page: Page) {
    await page.evaluate(async () => {
        await new Promise((resolve) => {
            if (navigator.serviceWorker.controller) {
                resolve(true);
            } else {
                navigator.serviceWorker.addEventListener('controllerchange', () => resolve(true));
            }
        });
    });
}
