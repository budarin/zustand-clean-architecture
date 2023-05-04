import { toDefaultBoolean } from '../toDefaultBoolean.ts';

describe('Функция toDefaultBoolean', () => {
    test('должна возвращать переданное значение, если оно уже булево', () => {
        const toDefault = toDefaultBoolean(true);
        expect(toDefault(true)).toBe(true);
        expect(toDefault(false)).toBe(false);
    });

    test('должна возвращать значение byDefault, если переданное значение undefined', () => {
        const toDefaultTrue = toDefaultBoolean(true);
        const toDefaultFalse = toDefaultBoolean(false);
        expect(toDefaultTrue(undefined)).toBe(true);
        expect(toDefaultFalse(undefined)).toBe(false);
        expect(toDefaultFalse(null)).toBe(false);
    });

    test('должна возвращать true для строковых значений "true" и false для "false"', () => {
        const toDefault = toDefaultBoolean(true);
        expect(toDefault('true')).toBe(true);
        expect(toDefault('false')).toBe(false);
    });

    test('должна возвращать undefined для значений, отличных от булева и строковых "true" и "false"', () => {
        const toDefault = toDefaultBoolean(false);
        expect(toDefault(10)).toBeUndefined();
        expect(toDefault('строка')).toBeUndefined();
        expect(toDefault({})).toBeUndefined();
        expect(toDefault([])).toBeUndefined();
        expect(toDefault(NaN)).toBeUndefined();
    });
});
