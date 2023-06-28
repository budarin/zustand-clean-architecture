import { isEmptyObjectOrUndefined } from '../isEmptyObjectOrUndefined.ts';

describe('isEmptyObjectOrUndefined', () => {
    it('возвращает true для undefined', () => {
        expect(isEmptyObjectOrUndefined(undefined)).toBe(true);
    });

    it('возвращает true для null', () => {
        expect(isEmptyObjectOrUndefined(null)).toBe(true);
    });

    it('возвращает true для пустого объекта', () => {
        expect(isEmptyObjectOrUndefined({})).toBe(true);
    });

    it('возвращает false для объекта с заполненными полями', () => {
        expect(isEmptyObjectOrUndefined({ foo: 'bar' })).toBe(false);
    });

    it('возвращает false для числа', () => {
        expect(isEmptyObjectOrUndefined(5)).toBe(false);
    });

    it('возвращает false для строки', () => {
        expect(isEmptyObjectOrUndefined('foo')).toBe(false);
    });

    it('возвращает false для массива', () => {
        expect(isEmptyObjectOrUndefined([1, 2, 3])).toBe(false);
    });
});
