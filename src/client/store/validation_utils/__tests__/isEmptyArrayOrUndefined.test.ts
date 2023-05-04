import { isEmptyArrayOrUndefined } from '../isEmptyArrayOrUndefined.ts';

describe('isEmptyArrayOrUndefined', () => {
    test('возвращает true для пустого массива', () => {
        expect(isEmptyArrayOrUndefined([])).toBe(true);
    });

    test('возвращает true для undefined', () => {
        expect(isEmptyArrayOrUndefined(undefined)).toBe(true);
    });

    test('возвращает true для null', () => {
        expect(isEmptyArrayOrUndefined(null)).toBe(true);
    });

    test('возвращает false для не пустого массива', () => {
        expect(isEmptyArrayOrUndefined([1, 2, 3])).toBe(false);
    });

    test('возвращает false для числа', () => {
        expect(isEmptyArrayOrUndefined(5)).toBe(false);
    });

    test('возвращает false для строка', () => {
        expect(isEmptyArrayOrUndefined('foo')).toBe(false);
    });

    test('возвращает false для объекта', () => {
        expect(isEmptyArrayOrUndefined({})).toBe(false);
    });
});
