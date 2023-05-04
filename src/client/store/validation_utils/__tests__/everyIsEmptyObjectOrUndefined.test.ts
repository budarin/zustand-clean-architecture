import { everyIsEmptyObjectOrUndefined } from '../everyIsEmptyObjectOrUndefined.ts';

describe('everyIsEmptyObjectOrUndefined', () => {
    test('возвращает true, если объект пустой', () => {
        const obj = {};
        expect(everyIsEmptyObjectOrUndefined(obj)).toBe(true);
    });

    test('возвращает false, если объект содержит значения', () => {
        const obj = { a: 1, b: 'value' };
        expect(everyIsEmptyObjectOrUndefined(obj)).toBe(false);
    });

    test('возвращает true, если объект содержит только undefined', () => {
        const obj = { a: undefined, b: undefined };
        expect(everyIsEmptyObjectOrUndefined(obj)).toBe(true);
    });

    test('возвращает true, если объект содержит только пустые объекты', () => {
        const obj = { a: {}, b: {} };
        expect(everyIsEmptyObjectOrUndefined(obj)).toBe(true);
    });

    test('возвращает false, если объект содержит пустой объект и значения', () => {
        const obj = { a: {}, b: 'value' };
        expect(everyIsEmptyObjectOrUndefined(obj)).toBe(false);
    });

    test('возвращает false, если объект содержит undefined и значения', () => {
        const obj = { a: undefined, b: 'value' };
        expect(everyIsEmptyObjectOrUndefined(obj)).toBe(false);
    });
});
