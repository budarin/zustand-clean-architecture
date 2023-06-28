import { isEmptyArrayOrUndefined } from '../isEmptyArrayOrUndefined.ts';

describe('isEmptyArrayOrUndefined', () => {
    it('возвращает true для пустого массива', () => {
        expect(isEmptyArrayOrUndefined([])).toBe(true);
    });

    it('возвращает true для undefined', () => {
        expect(isEmptyArrayOrUndefined(undefined)).toBe(true);
    });

    it('возвращает true для null', () => {
        expect(isEmptyArrayOrUndefined(null)).toBe(true);
    });

    it('возвращает false для не пустого массива', () => {
        expect(isEmptyArrayOrUndefined([1, 2, 3])).toBe(false);
    });

    it('возвращает false для числа', () => {
        expect(isEmptyArrayOrUndefined(5)).toBe(false);
    });

    it('возвращает false для строка', () => {
        expect(isEmptyArrayOrUndefined('foo')).toBe(false);
    });

    it('возвращает false для объекта', () => {
        expect(isEmptyArrayOrUndefined({})).toBe(false);
    });
});
