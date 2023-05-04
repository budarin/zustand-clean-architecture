import { isEmptyObjectOrUndefined } from '../isEmptyObjectOrUndefined.ts';

describe('isEmptyObjectOrUndefined', () => {
    test('возвращает true для undefined', () => {
        expect(isEmptyObjectOrUndefined(undefined)).toBe(true);
    });

    test('возвращает true для null', () => {
        expect(isEmptyObjectOrUndefined(null)).toBe(true);
    });

    test('возвращает true для пустого объекта', () => {
        expect(isEmptyObjectOrUndefined({})).toBe(true);
    });

    test('возвращает false для объекта с заполненными полями', () => {
        expect(isEmptyObjectOrUndefined({ foo: 'bar' })).toBe(false);
    });

    test('возвращает false для числа', () => {
        expect(isEmptyObjectOrUndefined(5)).toBe(false);
    });

    test('возвращает false для строки', () => {
        expect(isEmptyObjectOrUndefined('foo')).toBe(false);
    });

    test('возвращает false для массива', () => {
        expect(isEmptyObjectOrUndefined([1, 2, 3])).toBe(false);
    });
});
