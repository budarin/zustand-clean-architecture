import { isInt } from '../isInt';

describe('isInt', () => {
    test('проверка, что целое число возвращает true', () => {
        expect(isInt(42)).toBeTruthy();
        expect(isInt(0)).toBeTruthy();
        expect(isInt(-42)).toBeTruthy();
    });

    test('проверка, что не целое число возвращает false', () => {
        expect(isInt(42.5)).toBeFalsy();
        expect(isInt(-42.1)).toBeFalsy();
        expect(isInt(NaN)).toBeFalsy();
        expect(isInt('42')).toBeFalsy();
        expect(isInt(null)).toBeFalsy();
    });

    test('проверка, что другие типы данных возвращают false', () => {
        expect(isInt(true)).toBeFalsy();
        expect(isInt([])).toBeFalsy();
        expect(isInt({ key: 'value' })).toBeFalsy();
        expect(isInt(undefined)).toBeFalsy();
        expect(isInt(() => {})).toBeFalsy();
    });
});
