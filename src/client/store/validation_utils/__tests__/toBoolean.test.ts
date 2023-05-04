import { toBoolean } from '../toBoolean.ts';

describe('Функция toBoolean', () => {
    test('должна возвращать значение true для true и false', () => {
        expect(toBoolean(true)).toBe(true);
        expect(toBoolean(false)).toBe(true);
    });

    test('должна возвращать значение undefined для не булевых значений', () => {
        expect(toBoolean('строка')).toBeUndefined();
        expect(toBoolean(10.5)).toBeUndefined();
        expect(toBoolean({})).toBeUndefined();
        expect(toBoolean([])).toBeUndefined();
    });

    test('должна возвращать значение true для строки "true" и значение false для строки "false"', () => {
        expect(toBoolean('true')).toBe(true);
        expect(toBoolean('false')).toBe(false);
    });
});
