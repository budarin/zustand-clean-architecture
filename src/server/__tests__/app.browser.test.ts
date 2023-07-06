import { test, expect } from '@playwright/test';

import { serverInitialState } from '../utils/serverInitialState.ts';
import { waitForServiceWorker } from './utils/waitForServiceWorker.ts';

test.describe('Приложение', async () => {
    test('Запущено и работает', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveTitle(/Мои Задачи/);
    });
});

test.describe('Service-worker', () => {
    test('Получение первоначального состояния', async ({ page }) => {
        await waitForServiceWorker(page);

        const { result: todosStore, error } = await page.evaluate(async () => {
            const req = await fetch('/api/get_todos');
            return req.json();
        });

        expect(error).toBeUndefined();

        expect(todosStore.icons).toEqual(serverInitialState.icons);
        expect(todosStore.statuses).toEqual(serverInitialState.statuses);
        expect(todosStore.categories).toEqual(serverInitialState.categories);
        expect(todosStore.todos.length).toEqual(serverInitialState.todos.length);
    });
});
