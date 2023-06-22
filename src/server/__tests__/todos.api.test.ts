import { test, expect } from '@playwright/test';

import { waitForServiceWorker } from './utils/waitForServiceWorker.ts';

test.describe('Service-worker', () => {
    test('Создание задачи', async ({ page }) => {
        await waitForServiceWorker(page);

        const category = await page.evaluate(async () => {
            let req = await fetch('/api/create_todo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify({
                    status_id: 1,
                    category_id: 1,
                    todo: 'Simple Todo',
                    description: 'Description for simple Todo',
                }),
            });
            return await req.json();
        });

        expect(category).toEqual({
            result: {
                todo_id: 8,
                status_id: 1,
                category_id: 1,
                todo: 'Simple Todo',
                description: 'Description for simple Todo',
                completed: false,
                deleted: false,
            },
        });
    });
});
