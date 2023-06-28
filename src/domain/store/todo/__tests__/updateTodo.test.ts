import { updateTodo } from '../updateTodo';
import { resetStore } from '../../../../utils/jest/store.setup';

beforeAll(() => {
    resetStore();
});

describe('addTodo', () => {
    it('должна возвращать ошибку если объект не является записью Todo', () => {
        const input = {
            lalala: 'lololo',
        };
        const { result, error } = updateTodo(input);

        expect(result).toBeUndefined();
        expect(error).not.toBeUndefined();
    });
});
