import { toDefaultBoolean } from '../toDefaultBoolean.ts';

describe('Функция toDefaultBoolean', () => {
    it('должна возвращать переданное значение, если оно уже булево', () => {
        const toDefault = toDefaultBoolean(true);
        expect(toDefault(true)).toBe(true);
        expect(toDefault(false)).toBe(false);
    });

    it('должна возвращать значение byDefault, если переданное значение undefined', () => {
        const toDefaultTrue = toDefaultBoolean(true);
        const toDefaultFalse = toDefaultBoolean(false);
        expect(toDefaultTrue(undefined)).toBe(true);
        expect(toDefaultFalse(undefined)).toBe(false);
        expect(toDefaultFalse(null)).toBe(false);
    });

    it('должна возвращать true для строковых значений "true" и false для "false"', () => {
        const toDefault = toDefaultBoolean(true);
        expect(toDefault('true')).toBe(true);
        expect(toDefault('false')).toBe(false);
    });

    it.only('должна возвращать оригинал для значений, отличных от булева и строковых "true" и "false"', () => {
        const toDefault = toDefaultBoolean(false);
        expect(toDefault(10)).toEqual(10);
        expect(toDefault('строка')).toEqual('строка');
        expect(toDefault({})).toEqual({});
        expect(toDefault([])).toEqual([]);
        expect(toDefault(NaN)).toEqual(NaN);

        expect(toDefault(undefined)).toEqual(false);
        expect(toDefault(true)).toEqual(true);
        expect(toDefault(false)).toEqual(false);
        expect(toDefault('true')).toEqual(true);
        expect(toDefault('false')).toEqual(false);
    });
});
