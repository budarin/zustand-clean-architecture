import { addStatus } from '../addStatus';
import { useTodoStore } from '../../store';
import { resetStore } from '../../../../utils/jest/store.setup';

beforeAll(() => {
    resetStore();
});

describe('addStatus', () => {
    it('должна возвращать ошибку если объект не является записью Status', () => {
        const input = {
            lalala: 'lololo',
        };
        const { result, error } = addStatus(input);

        expect(result).toBeUndefined();
        expect(error).not.toBeUndefined();
    });

    it('должна возвращать ошибку если в хранилище существует статус с таким же id', () => {
        const input = {
            status_id: 1,
            status: 'новый',
            color: '#123456',
        };

        const { result, error } = addStatus(input);

        expect(result).toBeUndefined();
        expect(error).toEqual({
            code: 500,
            error: 'Нарушение уникальностиидентификатора статуса',
            data: {
                status_id: 1,
                status: 'новый',
                color: '#123456',
            },
        });
    });

    it('должна возвращать ошибку если в хранилище существует статус с таким же именем', () => {
        const input = {
            status_id: 10,
            status: 'высокий',
            color: '#123456',
        };

        const { result, error } = addStatus(input);

        expect(result).toBeUndefined();
        expect(error).toEqual({
            code: 500,
            error: 'Нарушение уникальности имени статуса',
            data: {
                status_id: 10,
                status: 'высокий',
                color: '#123456',
            },
        });
    });

    it('должна добавить запись в хранилище и вернуть запись Status', () => {
        const status_id = 10;
        const input = {
            status_id,
            status: 'новый',
            color: '#123456',
        };
        const { result, error } = addStatus(input);
        const state = useTodoStore.getState();

        expect(error).toBeUndefined();
        expect(result).toEqual(state.statuses.byId[status_id]);
    });
});
