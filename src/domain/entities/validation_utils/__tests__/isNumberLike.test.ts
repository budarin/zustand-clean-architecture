import { isNumberLike } from '../isNumberLike.ts';

describe('Функция isNumberLike', () => {
    it('возвращает true если аргумент - число', () => {
        expect(isNumberLike(42)).toBeTruthy();
        expect(isNumberLike(-10)).toBeTruthy();
        expect(isNumberLike(0)).toBeTruthy();
    });
    it('возвращает true если аргумент - строка, содержащая число', () => {
        expect(isNumberLike('42')).toBeTruthy();
        expect(isNumberLike('-10')).toBeTruthy();
        expect(isNumberLike('0')).toBeTruthy();
        expect(isNumberLike(' 42 ')).toBeTruthy();
        expect(isNumberLike('3.14')).toBeTruthy();
    });
    it('возвращает false если аргумент - не число и не строка, содержащая число', () => {
        expect(isNumberLike(null)).toBeFalsy();
        expect(isNumberLike(undefined)).toBeFalsy();
        expect(isNumberLike(true)).toBeFalsy();
        expect(isNumberLike({ a: 42 })).toBeFalsy();
        expect(isNumberLike([1, 2, 3])).toBeFalsy();
        expect(isNumberLike('')).toBeFalsy();
        expect(isNumberLike('   ')).toBeFalsy();
        expect(isNumberLike('42x')).toBeFalsy();
    });
});
