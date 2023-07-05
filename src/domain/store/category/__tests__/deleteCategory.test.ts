import { useTodoStore } from '../../store.tsx';
import { addCategory } from '../addCategory.ts';
import { deleteCategory } from '../deleteCategory.ts';
import { resetStore } from '../../../../utils/jest/store.setup.ts';

beforeAll(() => {
    resetStore();
});

describe('deleteCategory', () => {
    it('должна возвращать ошибку если объект не является записью Category', () => {
        const input = {
            lalala: 'lololo',
        };
        const { result, error } = deleteCategory(input);

        expect(result).toBeUndefined();
        expect(error).not.toBeUndefined();
    });

    it('должна возвращать ошибку если с данной категорией есть связанные задачи', () => {
        const input = {
            category_id: 1,
            icon_id: 2,
            category: 'Дом',
        };
        const { result, error } = deleteCategory(input);

        expect(result).toBeUndefined();
        expect(error).toEqual({
            code: 500,
            error: 'Нельзя удалить Категорию - с ней связаны задачи',
            data: {
                category_id: 1,
                category: 'Дом',
                icon_id: 2,
            },
        });
    });

    it('должна успешно удалять существующую и не связанную с задачами категорию', () => {
        const category_id = 111;
        const input = {
            category_id,
            icon_id: 2,
            category: 'Новая',
        };
        const newCategory = addCategory(input);

        expect(newCategory.result).not.toBeUndefined();

        if (newCategory.result) {
            const { result, error } = deleteCategory(newCategory.result);

            expect(error).toBeUndefined();
            expect(result).toEqual({
                category_id: 111,
                icon_id: 2,
                category: 'Новая',
            });

            const state = useTodoStore.getState();
            const deletedCategory = state.categories.byId[category_id];

            expect(state.categories.ids).not.toContain(category_id);
            expect(deletedCategory).toBeUndefined();
        }
    });
});
