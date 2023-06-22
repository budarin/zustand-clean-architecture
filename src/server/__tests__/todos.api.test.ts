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

    test('Создание задачи с не верным status_id', async ({ page }) => {
        await waitForServiceWorker(page);

        const category = await page.evaluate(async () => {
            let req = await fetch('/api/create_todo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify({
                    status_id: 10,
                    category_id: 1,
                    todo: 'Simple Todo',
                    description: 'Description for simple Todo',
                }),
            });

            return await req.json();
        });

        expect(category).toEqual({
            error: {
                code: 500,
                error: 'Статус задачи не обнаружен в стправочнике!',
            },
        });
    });

    test('Создание задачи с не верным category_id', async ({ page }) => {
        await waitForServiceWorker(page);

        const category = await page.evaluate(async () => {
            let req = await fetch('/api/create_todo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify({
                    status_id: 1,
                    category_id: 10,
                    todo: 'Simple Todo',
                    description: 'Description for simple Todo',
                }),
            });

            return await req.json();
        });

        expect(category).toEqual({
            error: {
                code: 500,
                error: 'Категория задачи не обнаружена в стправочнике!',
            },
        });
    });

    test('Изменение задачи', async ({ page }) => {
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

            req = await fetch('/api/update_todo', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify({
                    todo_id: 8,
                    status_id: 1,
                    category_id: 1,
                    todo: 'Simple Todo Modified',
                    description: 'Description for simple Todo',
                    completed: false,
                    deleted: false,
                }),
            });

            return await req.json();
        });

        expect(category).toEqual({
            result: {
                todo_id: 8,
                status_id: 1,
                category_id: 1,
                todo: 'Simple Todo Modified',
                description: 'Description for simple Todo',
                completed: false,
                deleted: false,
            },
        });
    });

    test('Удаление задачи', async ({ page }) => {
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

            req = await fetch('/api/delete_todo', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify({
                    todo_id: 8,
                    status_id: 1,
                    category_id: 1,
                    todo: 'Simple Todo',
                    description: 'Description for simple Todo',
                    completed: false,
                    deleted: false,
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

    test('Удаление не существующей задачи', async ({ page }) => {
        await waitForServiceWorker(page);

        const category = await page.evaluate(async () => {
            let req = await fetch('/api/delete_todo', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify({
                    todo_id: 18,
                    status_id: 1,
                    category_id: 1,
                    todo: 'Simple Todo',
                    description: 'Description for simple Todo',
                    completed: false,
                    deleted: false,
                }),
            });

            return await req.json();
        });

        expect(category).toEqual({
            error: {
                code: 500,
                error: 'Задача не найдена!',
            },
        });
    });
});
