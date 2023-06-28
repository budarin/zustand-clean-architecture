import { updateCategory } from '../updateCategory';
import { resetStore } from '../../../../utils/jest/store.setup';

beforeAll(() => {
    resetStore();
});

describe('updateCategory', () => {
    it('должна возвращать ошибку если объект не является записью Category', () => {
        const input = {
            lalala: 'lololo',
        };
        const { result, error } = updateCategory(input);

        expect(result).toBeUndefined();
        expect(error).not.toBeUndefined();
    });

    it('должна возвращать ошибку если в хранилище существует категории с таким же именем', () => {
        const input = {
            category_id: 3,
            category: 'Дом',
            icon_id: 1,
        };

        const { result, error } = updateCategory(input);

        expect(result).toBeUndefined();
        expect(error).toEqual({
            code: 500,
            error: 'Нарушение уникальности имени ктегории',
            data: {
                category_id: 3,
                category: 'Дом',
                icon_id: 1,
            },
        });
    });

    it('должна возвращать ошибку если нет категории с указанным идентификатором', () => {
        const input = {
            category_id: 111,
            category: 'Новая',
            icon_id: 1,
        };

        const { result, error } = updateCategory(input);

        expect(result).toBeUndefined();
        expect(error).toEqual({
            code: 500,
            error: 'Категория не найдена',
            data: {
                category_id: 111,
                category: 'Новая',
                icon_id: 1,
            },
        });
    });

    it('должна добавить запись в хранилище и вернуть запись Category', () => {
        const input = {
            category_id: 1,
            category: 'Дом1',
            icon_id: 2,
        };

        const { result, error } = updateCategory(input);

        expect(error).toBeUndefined();
        expect(result).toEqual({
            category_id: 1,
            category: 'Дом1',
            icon_id: 2,
        });
    });
});
