import { isExists } from '../isExists';

describe('функция isExists', () => {
    test("если аргумент не null, undefined, false, '', 0, NaN, функция возвращает true", () => {
        expect(isExists('hello')).toBe(true);
        expect(isExists(123)).toBe(true);
        expect(isExists([])).toBe(true);
        expect(isExists({})).toBe(true);
        expect(isExists(false)).toBe(true);
        expect(isExists('')).toBe(true);
        expect(isExists(0)).toBe(true);
        expect(isExists(NaN)).toBe(true);
    });

    test("если аргумент равен null, undefined, false, '', 0, NaN, функция возвращает false", () => {
        expect(isExists(null)).toBe(false);
        expect(isExists(undefined)).toBe(false);
    });
});
