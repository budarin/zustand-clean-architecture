import { isBoolean } from '../isBoolean.ts';

describe('isBoolean', () => {
    test('возвращает true для значения типа boolean', () => {
        expect(isBoolean(true)).toBe(true);
        expect(isBoolean(false)).toBe(true);
    });

    test('возвращает false для значения других типов', () => {
        expect(isBoolean(null)).toBe(false);
        expect(isBoolean(undefined)).toBe(false);
        expect(isBoolean('')).toBe(false);
        expect(isBoolean(new Date())).toBe(false);
        expect(isBoolean(0)).toBe(false);
        expect(isBoolean({})).toBe(false);
        expect(isBoolean([])).toBe(false);
    });
});
