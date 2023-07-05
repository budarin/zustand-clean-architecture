import { validate_id, validate_color, validate_status, getStatusFomObject, validateStatusEntity } from './index.ts';

describe('validate_id', () => {
    it('должна возвращать false, если свойство status_id не существует', () => {
        const input = { some_other_property: 123 };
        const result = validate_id(input);

        expect(result).toBe(false);
    });

    it('должна возвращать false, если свойство status_id не является целочисленным', () => {
        const input = { status_id: '123' };
        const result = validate_id(input);

        expect(result).toBe(false);
    });

    it('должна возвращать true, если свойство status_id существует и является целочисленным', () => {
        const input = { status_id: 123 };
        const result = validate_id(input);

        expect(result).toBe(true);
    });
});

describe('validate_color', () => {
    it('должна возвращать false, если свойство color не существует', () => {
        const input = { some_other_property: '#FFFFFF' };
        const result = validate_color(input);

        expect(result).toBe(false);
    });

    it('должна возвращать false, если свойство color не является строкой длиной 7 символов', () => {
        const input = { color: '#FFF' };
        const result = validate_color(input);

        expect(result).toBe(false);
    });

    it('должна возвращать false, если первый символ свойства color не является "#" символом', () => {
        const input = { color: 'FFFFFF' };
        const result = validate_color(input);

        expect(result).toBe(false);
    });

    it('должна возвращать true, если свойство color существует и является строкой длиной 7 символов и первый символ "#" символ', () => {
        const input = { color: '#FFFFFF' };
        const result = validate_color(input);

        expect(result).toBe(true);
    });
});

describe('validate_status', () => {
    it('должна возвращать false, если свойство status не является строкой', () => {
        const input = { status: 123 };
        const result = validate_status(input);

        expect(result).toBe(false);
    });

    it('должна возвращать false, если длина свойства status находится за пределами допустимого диапазона', () => {
        const input = { status: 'St' };
        const result = validate_status(input);

        expect(result).toBe(false);
    });

    it('должна возвращать false, если длина свойства status находится за пределами допустимого диапазона', () => {
        const input = { status: 'Active state status activated' };
        const result = validate_status(input);

        expect(result).toBe(false);
    });

    it('должна возвращать true, если свойство status является строкой и находится в допустимом диапазоне длины', () => {
        const input = { status: 'Active' };
        const result = validate_status(input);

        expect(result).toBe(true);
    });
});

describe('getStatusFomObject', () => {
    it('должна возвращать объект только с требуемыми свойствами, если входной объект содержит избыточные поля', () => {
        const input = {
            status_id: 1,
            status: 'Active',
            color: '#FFFFFF',
            some_other_property: 'value',
        };

        const expectedOutput = {
            status_id: 1,
            status: 'Active',
            color: '#FFFFFF',
        };

        const result = getStatusFomObject(input);

        expect(result).toEqual(expectedOutput);
    });

    it('должна возвращать объект с неопределенными значениями для требуемых свойств, если входной объект не содержит этих свойств', () => {
        const input = {};
        const expectedOutput = {
            status_id: undefined,
            status: undefined,
            color: undefined,
        };

        const result = getStatusFomObject(input);

        expect(result).toEqual(expectedOutput);
    });
});

describe('validateStatusEntity', () => {
    it('должна возвращать объект с ошибкой, если проверка не прошла для свойства status_id (не целочисленный тип)', () => {
        const status = { status_id: '123', status: 'Active', color: '#FFFFFF' };
        const expectedError = 'обязательное поле status_id должно быть целочисленным числом';

        const result = validateStatusEntity(status);

        expect(result.error).toBe(expectedError);
    });

    it('должна возвращать объект с ошибкой, если проверка не прошла для свойства status (недопустимая длина)', () => {
        const status = { status_id: 1, status: 'St', color: '#FFFFFF' };
        const expectedError = 'Длина названия статуса должна быть более 3 символов и не превышать 20 символов';

        const result = validateStatusEntity(status);

        expect(result.error).toBe(expectedError);
    });

    it('должна возвращать объект с ошибкой, если проверка не прошла для свойства color (неверный формат)', () => {
        const status = { status_id: 1, status: 'Active', color: 'FFFFFF' };
        const expectedError = 'обязательное поле color должно быть строкой из 7 символов';

        const result = validateStatusEntity(status);

        expect(result.error).toBe(expectedError);
    });

    it('должна возвращать валидную сущность, если все проверки пройдены успешно', () => {
        const status = { status_id: 1, status: 'Active', color: '#FFFFFF' };

        const result = validateStatusEntity(status);

        expect(result.entity).toEqual(status);
        expect(result.error).toBeUndefined();
    });
});
