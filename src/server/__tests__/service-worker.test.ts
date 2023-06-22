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

        const todosStore = await page.evaluate(async () => {
            const req = await fetch('/api/get_todos');
            return req.json();
        });

        expect(todosStore.icons).toEqual(serverInitialState.icons);
        expect(todosStore.statuses).toEqual(serverInitialState.statuses);
        expect(todosStore.categories).toEqual(serverInitialState.categories);
        expect(todosStore.todos.length).toEqual(serverInitialState.todos.length);
    });

    test('Создание категории', async ({ page }) => {
        await waitForServiceWorker(page);

        const { category, count } = await page.evaluate(async () => {
            let count = 0;
            let req = await fetch('/api/create_category', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify({ category: 'Спорт', icon_id: 1 }),
            });
            const category = await req.json();

            const cache = await caches.open('todo-sw');
            const response = await cache.match('/api/get_todos');

            if (response !== undefined) {
                const data = await response.json();
                count = data.categories.length;
            }

            // req = await fetch('/api/get_todos');
            // const store = await req.json();

            return {
                category,
                count,
            };
        });

        expect(category).toEqual({ result: { category_id: 5, category: 'Спорт', icon_id: 1 } });
        // expect(count).toEqual(6);
    });

    // test('Изменение категории', async ({ page }) => {
    //     await waitForServiceWorker(page);

    //     const category = await page.evaluate(async () => {
    //         const req = await fetch('/api/update_category', {
    //             method: 'PATCH',
    //             headers: { 'Content-Type': 'application/json; charset=utf-8' },
    //             body: JSON.stringify({ category_id: 5, category: 'Спорт_1', icon_id: 3 }),
    //         });
    //         return req.json();
    //     });

    //     expect(category).toEqual({ result: { category_id: 5, category: 'Спорт_1', icon_id: 3 } });
    // });

    // test('Удаление категории', async ({ page }) => {
    //     await waitForServiceWorker(page);

    //     const category = await page.evaluate(async () => {
    //         const req = await fetch('/api/delete_category', {
    //             method: 'DELETE',
    //             headers: { 'Content-Type': 'application/json; charset=utf-8' },
    //             body: JSON.stringify({ category_id: 5, category: 'Спорт', icon_id: 1 }),
    //         });
    //         return req.json();
    //     });

    //     expect(category).toEqual({ result: { category_id: 5, category: 'Спорт', icon_id: 1 } });
    // });
});
