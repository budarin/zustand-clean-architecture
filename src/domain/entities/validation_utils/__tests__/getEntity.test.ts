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
        // @ts-ignore
        completed: toDefaultBoolean(false),
        isActive: toBoolean,
        createdAt: toTimeStamp,
    };

    it('конвертирует типы свойств в соответствии с переданными функциями-конвертерами', () => {
        const result = applyEntityConverters(entity, converters);
        expect(result).toEqual({
            id: 1,
            completed: false,
            isActive: true,
            createdAt: 1632102000,
        });
    });

    it('игнорирует отсутствующие свойства', () => {
        const result = applyEntityConverters({ ...entity, extraProp: 123 }, converters);
        expect(result).toEqual({
            id: 1,
            completed: false,
            isActive: true,
            createdAt: 1632102000,
            extraProp: 123,
        });
    });

    it('игнорирует неопределенные свойства', () => {
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
