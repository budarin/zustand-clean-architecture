import { isNotExists } from '../isNotExists.ts';

describe('isNotExists функция', () => {
    it('Возвращает true для null', () => {
        expect(isNotExists(null)).toBe(true);
    });

    it('Возвращает true для undefined', () => {
        expect(isNotExists(undefined)).toBe(true);
    });

    it('Возвращает false для числа', () => {
        expect(isNotExists(0)).toBe(false);
        expect(isNotExists(42)).toBe(false);
        expect(isNotExists(-1)).toBe(false);
    });

    it('Возвращает false для строки', () => {
        expect(isNotExists('')).toBe(false);
        expect(isNotExists('abc')).toBe(false);
    });

    it('Возвращает false для объекта', () => {
        expect(isNotExists({})).toBe(false);
    });
    it('Возвращает false для массива', () => {
        expect(isNotExists([])).toBe(false);
    });
});
