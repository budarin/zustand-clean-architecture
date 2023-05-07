import { isNotExists } from '../isNotExists';

describe('isNotExists функция', () => {
    test('Возвращает true для null', () => {
        expect(isNotExists(null)).toBe(true);
    });

    test('Возвращает true для undefined', () => {
        expect(isNotExists(undefined)).toBe(true);
    });

    test('Возвращает false для числа', () => {
        expect(isNotExists(0)).toBe(false);
        expect(isNotExists(42)).toBe(false);
        expect(isNotExists(-1)).toBe(false);
    });

    test('Возвращает false для строки', () => {
        expect(isNotExists('')).toBe(false);
        expect(isNotExists('abc')).toBe(false);
    });

    test('Возвращает false для объекта', () => {
        expect(isNotExists({})).toBe(false);
    });
    test('Возвращает false для массива', () => {
        expect(isNotExists([])).toBe(false);
    });
});
