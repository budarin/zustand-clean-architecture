import {
    validate_id,
    validate_icon_id,
    validate_category,
    getCategoryFomObject,
    validateCategoryEntity,
    validateNewCategoryEntity,
} from './index.ts';

describe('validate_id', () => {
    it('должна возвращать true, если category_id является целым числом', () => {
        expect(validate_id({ category_id: 5 })).toBe(true);
        expect(validate_id({ category_id: -10 })).toBe(true);
    });

    it('должна возвращать false, если category_id не является целым числом', () => {
        expect(validate_id({ category_id: '5' })).toBe(false);
        expect(validate_id({ category_id: 5.5 })).toBe(false);
        expect(validate_id({})).toBe(false);
    });
});

describe('validate_icon_id', () => {
    it('должна возвращать true, если icon_id является целым числом', () => {
        expect(validate_icon_id({ icon_id: 5 })).toBe(true);
        expect(validate_icon_id({ icon_id: -10 })).toBe(false);
    });

    it('должна возвращать false, если icon_id не является целым числом', () => {
        expect(validate_icon_id({ icon_id: '5' })).toBe(false);
        expect(validate_icon_id({ icon_id: 5.5 })).toBe(false);
        expect(validate_icon_id({})).toBe(false);
    });
});

describe('validate_category', () => {
    it('должна возвращать true, если category существует и его длина находится в заданном диапазоне', () => {
        expect(validate_category({ category: 'Test' })).toBe(true);
        expect(validate_category({ category: 'Long Category Name' })).toBe(true);
    });

    it('должна возвращать false, если category не существует или его длина находится за пределами диапазона', () => {
        expect(validate_category({})).toBe(false);
        expect(validate_category({ category: 'A' })).toBe(false);
        expect(validate_category({ category: 'Very Long Category Name' })).toBe(false);
    });
});

describe('getCategoryFomObject', () => {
    it('должна возвращать объект категории с указанными свойствами и игнорировать лишние свойства', () => {
        const input = {
            category_id: 5,
            category: 'Test Category',
            icon_id: 10,
            extraField: 'Extra',
        };

        const expectedOutput = {
            category_id: 5,
            category: 'Test Category',
            icon_id: 10,
        };

        expect(getCategoryFomObject(input)).toEqual(expectedOutput);
    });

    it('должна возвращать объект категории с неопределенными свойствами, если требуемые свойства отсутствуют', () => {
        const input = {
            extraField: 'Extra',
        };

        const expectedOutput = {
            category_id: undefined,
            category: undefined,
            icon_id: undefined,
        };

        expect(getCategoryFomObject(input)).toEqual(expectedOutput);
    });
});

describe('validateNewCategoryEntity', () => {
    it('должна возвращать объект с ошибкой, если проверка не прошла для свойства category', () => {
        const category = { category: 'I', icon_id: 10 };
        const expectedError = 'Длина названия категории должна быть более 3 символов и не превышать 20 символов';

        const result = validateNewCategoryEntity(category);

        expect(result.error).toBe(expectedError);
    });

    it('должна возвращать объект с ошибкой, если проверка не прошла для свойства icon_id', () => {
        const category = { category: 'Valid Category', icon_id: '10' };
        const expectedError = 'Category обязан иметь icon_id целым числом';

        const result = validateNewCategoryEntity(category);

        expect(result.error).toBe(expectedError);
    });

    it('должна возвращать объект с ошибкой, если проверка не прошла для обоих свойств category и icon_id', () => {
        const category = { category: 'I', icon_id: '10' };
        const expectedError = 'Длина названия категории должна быть более 3 символов и не превышать 20 символов';

        const result = validateNewCategoryEntity(category);

        expect(result.error).toBe(expectedError);
    });

    it('должна возвращать объект с валидированными данными, если проверка прошла успешно для всех свойств', () => {
        const category = { category: 'Valid Category', icon_id: 10 };

        const result = validateNewCategoryEntity(category);

        expect(result.entity).toEqual(category);
    });
});

describe('validateCategoryEntity', () => {
    it('должна возвращать объект с ошибкой, если проверка не прошла для свойства category_id', () => {
        const category = { category_id: '5', category: 'Valid Category', icon_id: 10 };
        const expectedError = 'Category обязан иметь category_id целым числом';

        const result = validateCategoryEntity(category);

        expect(result.error).toBe(expectedError);
    });

    it('должна возвращать объект с ошибкой, если проверка не прошла для свойства category', () => {
        const category = { category_id: 5, category: 'I', icon_id: 10 };
        const expectedError = 'Длина названия категории должна быть более 3 символов и не превышать 20 символов';

        const result = validateCategoryEntity(category);

        expect(result.error).toBe(expectedError);
    });

    it('должна возвращать объект с ошибкой, если проверка не прошла для свойства icon_id', () => {
        const category = { category_id: 5, category: 'Valid Category', icon_id: '10' };
        const expectedError = 'Category обязан иметь icon_id целым числом';

        const result = validateCategoryEntity(category);

        expect(result.error).toBe(expectedError);
    });

    it('должна возвращать объект с ошибкой, если проверка не прошла для всех свойств category_id, category и icon_id', () => {
        const category = { category_id: '5', category: 'I', icon_id: '10' };
        const expectedError = 'Category обязан иметь category_id целым числом';

        const result = validateCategoryEntity(category);

        expect(result.error).toBe(expectedError);
    });

    it('должна возвращать объект с валидированными данными, если проверка прошла успешно для всех свойств', () => {
        const category = { category_id: 5, category: 'Valid Category', icon_id: 10 };

        const result = validateCategoryEntity(category);

        expect(result.entity).toEqual(category);
    });
});
