import { isBoolean } from '../isBoolean.ts';

describe('isBoolean', () => {
    it('возвращает true для значения типа boolean', () => {
        expect(isBoolean(true)).toBe(true);
        expect(isBoolean(false)).toBe(true);
    });

    it('возвращает false для значения других типов', () => {
        expect(isBoolean(null)).toBe(false);
        expect(isBoolean(undefined)).toBe(false);
        expect(isBoolean('')).toBe(false);
        expect(isBoolean(new Date())).toBe(false);
        expect(isBoolean(0)).toBe(false);
        expect(isBoolean({})).toBe(false);
        expect(isBoolean([])).toBe(false);
    });
});
