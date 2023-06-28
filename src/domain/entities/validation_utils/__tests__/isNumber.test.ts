import { isNumber } from '../isNumber';

describe('isNumber функция', () => {
    it('возвращает true если аргумент - число', () => {
        expect(isNumber(42)).toBeTruthy();
        expect(isNumber(-10)).toBeTruthy();
        expect(isNumber(0)).toBeTruthy();
    });

    it('возвращает false если аргумент - не число', () => {
        expect(isNumber('42')).toBeFalsy();
        expect(isNumber(null)).toBeFalsy();
        expect(isNumber(undefined)).toBeFalsy();
        expect(isNumber(true)).toBeFalsy();
        expect(isNumber({ a: 42 })).toBeFalsy();
        expect(isNumber([1, 2, 3])).toBeFalsy();
    });
});
