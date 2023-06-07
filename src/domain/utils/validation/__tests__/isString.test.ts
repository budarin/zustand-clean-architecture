import { isString } from '../isString';

describe('Функция isString', () => {
    test('Возвращает true для строки', () => {
        expect(isString('test')).toBeTruthy();
        expect(isString('')).toBeTruthy();
        expect(isString(`hello`)).toBeTruthy();
    });
    test('Возвращает false для нестроковых аргументов', () => {
        expect(isString(null)).toBeFalsy();
        expect(isString(undefined)).toBeFalsy();
        expect(isString([])).toBeFalsy();
        expect(isString({})).toBeFalsy();
        expect(isString(42)).toBeFalsy();
        expect(isString(true)).toBeFalsy();
    });
});
