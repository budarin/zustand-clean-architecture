import { isFloat } from '../isFloat';

describe('функция isFloat', () => {
    it('возвращает true для числового аргумента', () => {
        expect(isFloat(3)).toBe(true);
        expect(isFloat(-1)).toBe(true);
        expect(isFloat(0)).toBe(true);
        expect(isFloat(1.5)).toBe(true);
    });

    it('возвращает false для не-числового аргумента', () => {
        expect(isFloat('3')).toBe(false);
        expect(isFloat(true)).toBe(false);
        expect(isFloat(null)).toBe(false);
        expect(isFloat(undefined)).toBe(false);
        expect(isFloat(NaN)).toBe(false);
        expect(isFloat({})).toBe(false);
        expect(isFloat([])).toBe(false);
    });
});
