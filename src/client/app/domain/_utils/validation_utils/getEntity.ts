import type { ToInt } from './toInt.ts';
import type { ToBoolean } from './toBoolean.ts';
import type { ToTimeStamp } from './toTimeStamp.ts';
import type { ToDefaultBoolean } from './toDefaultBoolean.ts';

type TypeConverter = ToTimeStamp | ToInt | ToBoolean | ToDefaultBoolean;

export type TypeConverters = Record<string, TypeConverter>;

export function applyEntityConverters<T>(entity: T, convertes: TypeConverters): T {
    Object.keys(convertes).forEach((propName) => {
        const key = propName as keyof T;
        const value = entity[key];
        //@ts-ignore
        entity[key] = convertes[propName](value);
    });

    return entity;
}
