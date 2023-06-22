import { test, expect } from '@playwright/test';
import { serverInitialState } from '../utils/serverInitialState';

test.describe('Приложение', async () => {
    test('Запущено и работает', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveTitle(/Мои Задачи/);
    });
});

test.describe('Service-worker', () => {
    test('Получение первоначального состояния', async ({ page }) => {
        await page.goto('/');

        // await a promise that resolves when the page is controlled.
        // Ensure you include clients.claim() in your activate handler!
        await page.evaluate(async () => {
            await new Promise((resolve) => {
                if (navigator.serviceWorker.controller) {
                    // If we're already controlled, resolve immediately.
                    resolve(true);
                } else {
                    // Otherwise, resolve after controllerchange fires.
                    navigator.serviceWorker.addEventListener('controllerchange', () => resolve(true));
                }
            });
        });

        const todosStore = await page.evaluate(async () => {
            const req = await fetch('/api/get_todos');
            return req.json();
        });

        expect(todosStore.icons).toEqual(serverInitialState.icons);
        expect(todosStore.statuses).toEqual(serverInitialState.statuses);
        expect(todosStore.categories).toEqual(serverInitialState.categories);
        expect(todosStore.todos.length).toEqual(serverInitialState.todos.length);
    });
});
