import { deleteTodo } from '../deleteTodo';
import { resetStore } from '../../../../utils/jest/store.setup';

beforeAll(() => {
    resetStore();
});

describe('addTodo', () => {
    it('должна возвращать ошибку если объект не является записью Todo', () => {
        const input = {
            lalala: 'lololo',
        };
        const { result, error } = deleteTodo(input);

        expect(result).toBeUndefined();
        expect(error).not.toBeUndefined();
    });
});
