import { everyPropIsEmptyArrayOrUndefined } from '../everyPropIsEmptyArrayOrUndefined.ts';

describe('everyIsEmptyArrayOrUndefined', () => {
    it('возвращает `true` для объекта, содержащего только пустые массивы или undefined', () => {
        const input = { a: [], b: undefined, c: [], d: undefined };
        expect(everyPropIsEmptyArrayOrUndefined(input)).toBe(true);
    });

    it('возвращает `false` для объекта, содержащего хотя бы одно значение, которое не является пустым массивом или undefined', () => {
        const input = { a: [], b: undefined, c: [1, 2, 3], d: undefined };
        expect(everyPropIsEmptyArrayOrUndefined(input)).toBe(false);
    });

    it('возвращает `true` для пустого объекта', () => {
        const input = {};
        expect(everyPropIsEmptyArrayOrUndefined(input)).toBe(true);
    });

    it('возвращает `true` для объекта, содержащего только undefined', () => {
        const input = { a: undefined, b: undefined };
        expect(everyPropIsEmptyArrayOrUndefined(input)).toBe(true);
    });

    it('возвращает `true` для объекта, содержащего только пустые массивы', () => {
        const input = { a: [], b: [], c: [] };
        expect(everyPropIsEmptyArrayOrUndefined(input)).toBe(true);
    });
});
