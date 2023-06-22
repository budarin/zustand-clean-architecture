import { test, expect } from '@playwright/test';

import { waitForServiceWorker } from './utils/waitForServiceWorker.ts';

test.describe('Service-worker', () => {
    test('Создание категории', async ({ page }) => {
        await waitForServiceWorker(page);

        const category = await page.evaluate(async () => {
            let req = await fetch('/api/create_category', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify({ category: 'Спорт', icon_id: 1 }),
            });
            return await req.json();
        });

        expect(category).toEqual({ result: { category_id: 5, category: 'Спорт', icon_id: 1 } });
    });

    test('Создание дубликата категории по названию', async ({ page }) => {
        await waitForServiceWorker(page);

        const category = await page.evaluate(async () => {
            let req = await fetch('/api/create_category', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify({ category: 'Спорт', icon_id: 1 }),
            });

            req = await fetch('/api/create_category', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify({ category: 'Спорт', icon_id: 1 }),
            });
            return await req.json();
        });

        expect(category).toEqual({ error: { code: 500, error: 'Нарушение уникальности имени категории' } });
    });

    test('Изменение категории', async ({ page }) => {
        await waitForServiceWorker(page);

        const category = await page.evaluate(async () => {
            let req = await fetch('/api/create_category', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify({ category: 'Спорт', icon_id: 1 }),
            });

            req = await fetch('/api/update_category', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify({ category_id: 5, category: 'Спорт_1', icon_id: 3 }),
            });

            return await req.json();
        });

        expect(category).toEqual({ result: { category_id: 5, category: 'Спорт_1', icon_id: 3 } });
    });

    test('Удаление категории', async ({ page }) => {
        await waitForServiceWorker(page);

        const category = await page.evaluate(async () => {
            let req = await fetch('/api/create_category', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify({ category: 'Спорт', icon_id: 1 }),
            });

            req = await fetch('/api/delete_category', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify({ category_id: 5, category: 'Спорт', icon_id: 1 }),
            });

            return await req.json();
        });

        expect(category).toEqual({ result: { category_id: 5, category: 'Спорт', icon_id: 1 } });
    });

    test('Попытка удаления не существующей категории', async ({ page }) => {
        await waitForServiceWorker(page);

        const category = await page.evaluate(async () => {
            let req = await fetch('/api/delete_category', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify({ category_id: 5, category: 'Спорт', icon_id: 1 }),
            });

            return await req.json();
        });

        expect(category).toEqual({ error: { code: 500, error: 'Категория "5" не найдена' } });
    });

    test('Попытка удаления используемой категории', async ({ page }) => {
        await waitForServiceWorker(page);

        const category = await page.evaluate(async () => {
            let req = await fetch('/api/delete_category', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify({ category_id: 1, category: 'Работа', icon_id: 3 }),
            });

            return await req.json();
        });

        expect(category).toEqual({ error: { code: 500, error: 'Нельзя удалить Категорию - с ней связаны задачи!' } });
    });
});
