import { addIcon } from '../addIcon.ts';
import { useTodoStore } from '../../store.tsx';
import { resetStore } from '../../../../utils/jest/store.setup.ts';

beforeAll(() => {
    resetStore();
});

describe('addIcon', () => {
    it('должна возвращать ошибку если объект не является записью Icon', () => {
        const input = {
            lalala: 'lololo',
        };
        const { result, error } = addIcon(input);

        expect(result).toBeUndefined();
        expect(error).not.toBeUndefined();
    });

    it('должна возвращать ошибку если в хранилище существует иконка с таким же id', () => {
        const input = {
            icon_id: 1,
            icon_name: 'new.png',
        };

        const { result, error } = addIcon(input);

        expect(result).toBeUndefined();
        expect(error).toEqual({
            code: 500,
            error: 'Нарушение уникальностиидентификатора иконки',
            data: {
                icon_id: 1,
                icon_name: 'new.png',
            },
        });
    });

    it('должна возвращать ошибку если в хранилище существует иконка с таким же именем', () => {
        const input = {
            icon_id: 20,
            icon_name: 'mail.png',
        };

        const { result, error } = addIcon(input);

        expect(result).toBeUndefined();
        expect(error).toEqual({
            code: 500,
            error: 'Нарушение уникальности имени иконки',
            data: {
                icon_id: 20,
                icon_name: 'mail.png',
            },
        });
    });

    it('должна добавить запись в хранилище и вернуть запись Icon', () => {
        const icon_id = 20;
        const input = {
            icon_id,
            icon_name: 'newmail.png',
        };
        const { result, error } = addIcon(input);
        const state = useTodoStore.getState();

        expect(error).toBeUndefined();
        expect(result).toEqual(state.icons.byId[icon_id]);
    });
});
