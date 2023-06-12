import { isObject } from '../isObject';

describe('Функция isObject', () => {
    test('возвращает true если аргумент - объект', () => {
        expect(isObject({ a: 42 })).toBeTruthy();
        expect(isObject([1, 2, 3])).toBeTruthy();
        expect(isObject(new Date())).toBeTruthy();
        expect(isObject(/abc/)).toBeTruthy();
    });
    test('возвращает false если аргумент - не объект', () => {
        expect(isObject(() => {})).toBeFalsy();
        expect(isObject(null)).toBeFalsy();
        expect(isObject(undefined)).toBeFalsy();
        expect(isObject(true)).toBeFalsy();
        expect(isObject(42)).toBeFalsy();
        expect(isObject('')).toBeFalsy();
    });
});
