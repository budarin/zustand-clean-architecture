import { toInt } from '../toInt.ts';

describe('Функция toInt', () => {
    test('должна возвращать переданное значение, если оно уже является целым числом', () => {
        expect(toInt(10)).toBe(10);
        expect(toInt(-5)).toBe(-5);
        expect(toInt(0)).toBe(0);
    });

    test('должна преобразовывать строковое значение в целое число', () => {
        expect(toInt('10')).toBe(10);
        expect(toInt('-5')).toBe(-5);
        expect(toInt('0')).toBe(0);
    });

    test('должна возвращать undefined для значений, отличных от целых чисел и строковых целых чисел', () => {
        expect(toInt(10.5)).toBeUndefined();
        expect(toInt('10.5')).toBeUndefined();
        expect(toInt('abc')).toBeUndefined();
        expect(toInt(true)).toBeUndefined();
        expect(toInt(false)).toBeUndefined();
        expect(toInt(null)).toBeUndefined();
        expect(toInt(undefined)).toBeUndefined();
    });
});
