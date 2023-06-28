import { isString } from '../isString';

describe('Функция isString', () => {
    it('Возвращает true для строки', () => {
        expect(isString('it')).toBeTruthy();
        expect(isString('')).toBeTruthy();
        expect(isString(`hello`)).toBeTruthy();
    });
    it('Возвращает false для нестроковых аргументов', () => {
        expect(isString(null)).toBeFalsy();
        expect(isString(undefined)).toBeFalsy();
        expect(isString([])).toBeFalsy();
        expect(isString({})).toBeFalsy();
        expect(isString(42)).toBeFalsy();
        expect(isString(true)).toBeFalsy();
    });
});
