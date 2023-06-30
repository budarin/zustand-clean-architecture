import { getIconFomObject, validateIconEntity, validate_id, validate_name } from '.';

describe('validate_id', () => {
    it('должна возвращать true, если свойство icon_id существует и является целочисленным значением', () => {
        const input = { icon_id: 10 };
        const result = validate_id(input);

        expect(result).toBe(true);
    });

    it('должна возвращать false, если свойство icon_id отсутствует', () => {
        const input = {};
        const result = validate_id(input);

        expect(result).toBe(false);
    });

    it('должна возвращать false, если свойство icon_id не является целочисленным значением', () => {
        const input = { icon_id: '10' };
        const result = validate_id(input);

        expect(result).toBe(false);
    });
});

describe('validate_name', () => {
    it('должна возвращать true, если свойство icon_name является строкой и его длина находится в допустимом диапазоне', () => {
        const input = { icon_name: 'Valid Icon Name' };
        const result = validate_name(input);

        expect(result).toBe(true);
    });

    it('должна возвращать false, если свойство icon_name отсутствует', () => {
        const input = {};
        const result = validate_name(input);

        expect(result).toBe(false);
    });

    it('должна возвращать false, если свойство icon_name не является строкой', () => {
        const input = { icon_name: 10 };
        const result = validate_name(input);

        expect(result).toBe(false);
    });

    it('должна возвращать объект с ошибкой, если проверка не прошла для свойства icon_name (недопустимая длина)', () => {
        const input = { icon_id: 5, icon_name: 'Invalid Icon Name Length' };
        const result = validate_name(input);

        expect(result).toBe(false);
    });

    it('должна возвращать объект с ошибкой, если проверка не прошла для свойства icon_name (длина меньше 5 символов)', () => {
        const input = { icon_id: 5, icon_name: 'Shrt' };
        const result = validate_name(input);

        expect(result).toBe(false);
    });
});

describe('getIconFomObject', () => {
    it('должна возвращать объект Icon с заданными свойствами, если они присутствуют в исходном объекте', () => {
        const input = { icon_id: 10, icon_name: 'Valid Icon Name', extraField: 'Extra' };
        const expectedOutput = { icon_id: 10, icon_name: 'Valid Icon Name' };

        expect(getIconFomObject(input)).toEqual(expectedOutput);
    });

    it('должна возвращать пустой объект, если исходный объект не содержит требуемых свойств', () => {
        const input = { extraField: 'Extra' };
        const expectedOutput = {};

        expect(getIconFomObject(input)).toEqual(expectedOutput);
    });
});

describe('validateIconEntity', () => {
    it('должна возвращать объект с ошибкой, если проверка не прошла для свойства icon_id', () => {
        const icon = { icon_id: '5', icon_name: 'Valid Icon Name' };
        const expectedError = 'Обязательное поле icon_id должно быть целочисленным числом';

        const result = validateIconEntity(icon);

        expect(result.error).toBe(expectedError);
    });

    it('должна возвращать объект с ошибкой, если проверка не прошла для свойства icon_name', () => {
        const icon = { icon_id: 5, icon_name: 'I' };
        const expectedError = 'Длина поля name должна быть не менее 5 символов и не более 20 символов';

        const result = validateIconEntity(icon);

        expect(result.error).toBe(expectedError);
    });

    it('должна возвращать объект с ошибкой, если проверка не прошла для обоих свойств icon_id и icon_name', () => {
        const icon = { icon_id: '5', icon_name: 10 };
        const expectedError = 'Обязательное поле icon_id должно быть целочисленным числом';

        const result = validateIconEntity(icon);

        expect(result.error).toBe(expectedError);
    });

    it('должна возвращать объект с валидированными данными, если проверка прошла успешно для всех свойств', () => {
        const icon = { icon_id: 5, icon_name: 'Valid Icon Name' };
        const result = validateIconEntity(icon);

        expect(result.entity).toEqual(icon);
    });
});
