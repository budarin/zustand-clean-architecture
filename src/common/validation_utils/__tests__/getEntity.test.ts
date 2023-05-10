import { toInt } from '../toInt.ts';
import { toBoolean } from '../toBoolean.ts';
import { toTimeStamp } from '../toTimeStamp.ts';
import { toDefaultBoolean } from '../toDefaultBoolean.ts';
import { TypeConverters, applyEntityConverters } from '../applyEntityConverters.ts';

describe('getEntity', () => {
    interface Entity {
        id: number;
        completed?: boolean | undefined;
        isActive: boolean;
        createdAt: number;
    }

    const entity: Entity = {
        id: 1,
        isActive: true,
        createdAt: 1632102000,
    };

    const converters: TypeConverters = {
        id: toInt,
        completed: toDefaultBoolean(false),
        isActive: toBoolean,
        createdAt: toTimeStamp,
    };

    test('конвертирует типы свойств в соответствии с переданными функциями-конвертерами', () => {
        const result = applyEntityConverters(entity, converters);
        expect(result).toEqual({
            id: 1,
            completed: false,
            isActive: true,
            createdAt: 1632102000,
        });
    });

    test('игнорирует отсутствующие свойства', () => {
        const result = applyEntityConverters({ ...entity, extraProp: 123 }, converters);
        expect(result).toEqual({
            id: 1,
            completed: false,
            isActive: true,
            createdAt: 1632102000,
            extraProp: 123,
        });
    });

    test('игнорирует неопределенные свойства', () => {
        const result = applyEntityConverters({ ...entity, undefinedProp: undefined }, converters);
        expect(result).toEqual({
            id: 1,
            completed: false,
            isActive: true,
            createdAt: 1632102000,
            undefinedProp: undefined,
        });
    });
});
