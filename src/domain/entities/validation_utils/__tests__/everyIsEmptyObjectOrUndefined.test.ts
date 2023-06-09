import { everyPropIsEmptyObjectOrUndefined } from '../everyPropIsEmptyObjectOrUndefined.ts';

describe('everyIsEmptyObjectOrUndefined', () => {
    it('возвращает true, если объект пустой', () => {
        const obj = {};
        expect(everyPropIsEmptyObjectOrUndefined(obj)).toBe(true);
    });

    it('возвращает false, если объект содержит значения', () => {
        const obj = { a: 1, b: 'value' };
        expect(everyPropIsEmptyObjectOrUndefined(obj)).toBe(false);
    });

    it('возвращает true, если объект содержит только undefined', () => {
        const obj = { a: undefined, b: undefined };
        expect(everyPropIsEmptyObjectOrUndefined(obj)).toBe(true);
    });

    it('возвращает true, если объект содержит только пустые объекты', () => {
        const obj = { a: {}, b: {} };
        expect(everyPropIsEmptyObjectOrUndefined(obj)).toBe(true);
    });

    it('возвращает false, если объект содержит пустой объект и значения', () => {
        const obj = { a: {}, b: 'value' };
        expect(everyPropIsEmptyObjectOrUndefined(obj)).toBe(false);
    });

    it('возвращает false, если объект содержит undefined и значения', () => {
        const obj = { a: undefined, b: 'value' };
        expect(everyPropIsEmptyObjectOrUndefined(obj)).toBe(false);
    });
});
