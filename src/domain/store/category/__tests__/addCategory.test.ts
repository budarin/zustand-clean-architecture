import { useTodoStore } from '../../store.tsx';
import { addCategory } from '../addCategory.ts';
import { resetStore } from '../../../../utils/jest/store.setup.ts';

beforeAll(() => {
    resetStore();
});

describe('addCategory', () => {
    it('должна возвращать ошибку если объект не является записью Category', () => {
        const input = {
            lalala: 'lololo',
        };
        const { result, error } = addCategory(input);

        expect(result).toBeUndefined();
        expect(error).not.toBeUndefined();
    });

    it('должна возвращать ошибку если в хранилище существует категории с таким же id', () => {
        const input = {
            category_id: 1,
            category: 'Новая',
            icon_id: 1,
        };

        const { result, error } = addCategory(input);

        expect(result).toBeUndefined();
        expect(error).toEqual({
            code: 500,
            error: 'Нарушение уникальностиидентификатора ктегории',
            data: {
                category_id: 1,
                category: 'Новая',
                icon_id: 1,
            },
        });
    });

    it('должна возвращать ошибку если в хранилище существует категории с таким же именем', () => {
        const input = {
            category_id: 111,
            category: 'Дом',
            icon_id: 1,
        };

        const { result, error } = addCategory(input);

        expect(result).toBeUndefined();
        expect(error).toEqual({
            code: 500,
            error: 'Нарушение уникальности имени ктегории',
            data: {
                category_id: 111,
                category: 'Дом',
                icon_id: 1,
            },
        });
    });

    it('должна добавить запись в хранилище и вернуть запись Category', () => {
        const category_id = 111;
        const input = {
            category_id,
            category: 'Новая',
            icon_id: 1,
        };
        const { result, error } = addCategory(input);
        const state = useTodoStore.getState();

        expect(error).toBeUndefined();
        expect(result).toEqual(state.categories.byId[category_id]);
    });
});
