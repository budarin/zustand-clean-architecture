import { isUndefined } from '../isUndefined.ts';

describe('Функция isUndefined', () => {
    it('должна возвращать значение true для undefined и null', () => {
        expect(isUndefined(undefined)).toBe(true);
        expect(isUndefined(null)).toBe(true);
    });

    it('должна возвращать значение false для не undefined и не null значений', () => {
        expect(isUndefined('строка')).toBe(false);
        expect(isUndefined(10.5)).toBe(false);
        expect(isUndefined(true)).toBe(false);
        expect(isUndefined({})).toBe(false);
        expect(isUndefined([])).toBe(false);
    });
});
