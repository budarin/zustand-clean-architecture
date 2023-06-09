import { exists } from '../exists.ts';

describe('функция isExists', () => {
    it("если аргумент не null, undefined, false, '', 0, NaN, функция возвращает true", () => {
        expect(exists('hello')).toBe(true);
        expect(exists(123)).toBe(true);
        expect(exists([])).toBe(true);
        expect(exists({})).toBe(true);
        expect(exists(false)).toBe(true);
        expect(exists('')).toBe(true);
        expect(exists(0)).toBe(true);
        expect(exists(NaN)).toBe(true);
    });

    it("если аргумент равен null, undefined, false, '', 0, NaN, функция возвращает false", () => {
        expect(exists(null)).toBe(false);
        expect(exists(undefined)).toBe(false);
    });
});
