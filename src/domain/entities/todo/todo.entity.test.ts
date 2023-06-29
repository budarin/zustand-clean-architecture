import {
    MIN_TODO_LENGTH,
    MAX_TODO_LENGTH,
    MIN_DESCRIPTION_LENGTH,
    MAX_DESCRIPTION_LENGTH,
    validate_id,
    validate_status_id,
    validate_category_id,
    validate_dueDate,
    validate_completed,
    validate_deleted,
    validate_todo,
    validateDescription,
    getTodoFomObject,
    validateTodoEntity,
    validateNewTodoEntity,
} from '.';
import { getTodayDate } from '../../../utils/dateTime/getTodayDate.ts';

describe('validate_id', () => {
    it('должна возвращать false, если свойство todo_id не существует', () => {
        const input = { some_other_property: 123 };
        const result = validate_id(input);

        expect(result).toBe(false);
    });

    it('должна возвращать false, если свойство todo_id не является целочисленным', () => {
        const input = { todo_id: '123' };
        const result = validate_id(input);

        expect(result).toBe(false);
    });

    it('должна возвращать true, если свойство todo_id существует и является целочисленным', () => {
        const input = { todo_id: 123 };
        const result = validate_id(input);

        expect(result).toBe(true);
    });
});

describe('validate_status_id', () => {
    it('должна возвращать true, если status_id является целым числом', () => {
        const entity = {
            status_id: 1,
        };

        const result = validate_status_id(entity);

        expect(result).toBe(true);
    });

    it('должна возвращать false, если status_id не является целым числом', () => {
        const entity = {
            status_id: 'invalid',
        };
        const result = validate_status_id(entity);

        expect(result).toBe(false);
    });

    it('должна возвращать false, если status_id отсутствует', () => {
        const entity = {};
        const result = validate_status_id(entity);

        expect(result).toBe(false);
    });
});

describe('validate_category_id', () => {
    it('должна возвращать true, если category_id является целым числом или неопределено', () => {
        const entity1 = {
            category_id: 1,
        };
        const entity2 = {
            category_id: undefined,
        };

        const result1 = validate_category_id(entity1);
        const result2 = validate_category_id(entity2);

        expect(result1).toBe(true);
        expect(result2).toBe(true);
    });

    it('должна возвращать false, если category_id не является целым числом или неопределено', () => {
        const entity = {
            category_id: 'invalid',
        };
        const result = validate_category_id(entity);

        expect(result).toBe(false);
    });

    it('должна возвращать true, если category_id отсутствует', () => {
        const entity = {};
        const result = validate_category_id(entity);

        expect(result).toBe(true);
    });
});

describe('validate_dueDate', () => {
    it('должна возвращать true, если свойство due_date не существует', () => {
        const input = { some_other_property: 'value' };
        const result = validate_dueDate(input);

        expect(result).toBe(true);
    });

    it('должна возвращать true, если свойство due_date является строкой', () => {
        const input = { due_date: '2023-06-28' };
        const result = validate_dueDate(input);

        expect(result).toBe(true);
    });

    it('должна возвращать false, если свойство due_date не является строкой', () => {
        const input = { due_date: 123 };
        const result = validate_dueDate(input);

        expect(result).toBe(false);
    });
});

describe('validate_completed', () => {
    it('должна возвращать true, если completed является логическим типом', () => {
        const entity1 = {
            completed: true,
        };

        const entity2 = {
            completed: false,
        };

        const result1 = validate_completed(entity1);
        const result2 = validate_completed(entity2);

        expect(result1).toBe(true);
        expect(result2).toBe(true);
    });

    it('должна возвращать false, если completed не является логическим типом', () => {
        const entity = {
            completed: 'invalid',
        };
        const result = validate_completed(entity);

        expect(result).toBe(false);
    });

    it('должна возвращать true, если completed не определено', () => {
        const entity = {};
        const result = validate_completed(entity);

        expect(result).toBe(true);
    });
});

describe('validate_deleted', () => {
    it('должна возвращать true, если deleted является логическим типом или неопределено', () => {
        const entity1 = {
            deleted: true,
        };

        const entity2 = {
            deleted: false,
        };

        const entity3 = {
            deleted: undefined,
        };

        const result1 = validate_deleted(entity1);
        const result2 = validate_deleted(entity2);
        const result3 = validate_deleted(entity3);

        expect(result1).toBe(true);
        expect(result2).toBe(true);
        expect(result3).toBe(true);
    });

    it('должна возвращать false, если deleted не является логическим типом или неопределено', () => {
        const entity = {
            deleted: 'invalid',
        };
        const result = validate_deleted(entity);

        expect(result).toBe(false);
    });
});

describe('validate_todo', () => {
    it('должна возвращать false, если свойство todo не является строкой', () => {
        const input = { todo: 123 };
        const result = validate_todo(input);

        expect(result).toBe(false);
    });

    it('должна возвращать false, если длина свойства todo находится вне диапазона', () => {
        const input1 = { todo: 'abcd' };
        const input2 = { todo: 'a'.repeat(MAX_TODO_LENGTH + 1) };

        const result1 = validate_todo(input1);
        const result2 = validate_todo(input2);

        expect(result1).toBe(false);
        expect(result2).toBe(false);
    });

    it('должна возвращать true, если свойство todo является строкой и находится в допустимом диапазоне', () => {
        const input = { todo: 'abcdefg' };
        const result = validate_todo(input);

        expect(result).toBe(true);
    });
});

describe('validateDescription', () => {
    it('должна возвращать true, если свойство description не существует', () => {
        const input = { some_other_property: 'value' };
        const result = validateDescription(input);

        expect(result).toBe(true);
    });

    it('должна возвращать false, если свойство description не является строкой', () => {
        const input = { description: 123 };
        const result = validateDescription(input);

        expect(result).toBe(false);
    });

    it('должна возвращать false, если длина свойства description находится вне диапазона', () => {
        const input1 = { description: 'abcd' };
        const input2 = { description: 'a'.repeat(MAX_DESCRIPTION_LENGTH + 1) };

        const result1 = validateDescription(input1);
        const result2 = validateDescription(input2);

        expect(result1).toBe(false);
        expect(result2).toBe(false);
    });

    it('должна возвращать true, если свойство description является строкой и находится в допустимом диапазоне', () => {
        const input = { description: 'abcdefghidgrgrgrg' };
        const result = validateDescription(input);

        expect(result).toBe(true);
    });
});

describe('getTodoFomObject', () => {
    it('должна возвращать объект с правильными полями и значениями', () => {
        const input = {
            todo_id: 1,
            todo: 'test todo',
            status_id: 2,
            category_id: 3,
            description: 'test description',
            due_date: '2023-06-28',
            deleted: false,
            completed: true,
            some_other_property: 'value',
        };

        const expectedOutput = {
            todo_id: 1,
            todo: 'Test todo',
            status_id: 2,
            category_id: 3,
            description: 'test description',
            due_date: '2023-06-28',
            deleted: false,
            completed: true,
        };

        const result = getTodoFomObject(input);

        expect(result).toEqual(expectedOutput);
    });

    it('должна возвращать объект с правильными полями и значениями', () => {
        const due_date = getTodayDate().toISOString();
        const input = {
            description: 'test description',
            due_date,
            deleted: false,
            completed: true,
            some_other_property: 'value',
        };

        const expectedOutput = {
            description: 'test description',
            due_date,
            deleted: false,
            completed: true,
        };

        const result = getTodoFomObject(input);

        expect(result).toEqual(expectedOutput);
    });

    it('должна возвращать "пустой" объект для объекта не содержащего ', () => {
        const input = {
            sdsddescription: 'test description',
            dfdduedate: getTodayDate().toISOString(),
            deleteddd: false,
            completeddf: true,
            some_other_property: 'value',
        };
        const expectedOutput = {
            category_id: undefined,
            completed: false,
            deleted: false,
            description: undefined,
            due_date: undefined,
            status_id: undefined,
            todo: undefined,
            todo_id: undefined,
        };
        const result = getTodoFomObject(input);

        expect(result).toEqual(expectedOutput);
    });

    it('должна возвращать пустой объект для пустого объекта', () => {
        const input = {};
        const expectedOutput = {
            category_id: undefined,
            completed: false,
            deleted: false,
            description: undefined,
            due_date: undefined,
            status_id: undefined,
            todo: undefined,
            todo_id: undefined,
        };
        const result = getTodoFomObject(input);

        expect(result).toEqual(expectedOutput);
    });
});

describe('validateTodoEntity', () => {
    it('должна возвращать объект с полем "error", если валидация не пройдена', () => {
        const entity = {
            todo_id: 'invalid',
            status_id: 'invalid',
            category_id: 'invalid',
            due_date: 123,
            completed: 'invalid',
            deleted: 'invalid',
            todo: 'Do',
            description: 'Short',
        };

        const result = validateTodoEntity(entity);

        expect(result).toEqual({
            error: 'обязательное поле todo_id должно быть целым числом',
        });
    });

    it('должна возвращать объект с полем "entity", если валидация пройдена', () => {
        const entity = {
            todo_id: 1,
            status_id: 1,
            category_id: 2,
            due_date: '2023-06-28',
            completed: true,
            deleted: false,
            todo: 'Do something',
            description: 'This is a description',
        };

        const result = validateTodoEntity(entity);

        expect(result).toEqual({
            entity: entity,
        });
    });

    it('должна возвращать объект с полем "error", если validate_id не пройдена', () => {
        const entity = {
            todo_id: 'invalid',
            status_id: 1,
            category_id: 2,
            due_date: '2023-06-28',
            completed: true,
            deleted: false,
            todo: 'Do something',
            description: 'This is a description',
        };

        const result = validateTodoEntity(entity);

        expect(result).toEqual({
            error: 'обязательное поле todo_id должно быть целым числом',
        });
    });

    it('должна возвращать объект с полем "error", если validate_status_id не пройдена', () => {
        const entity = {
            todo_id: 1,
            status_id: 'invalid',
            category_id: 2,
            due_date: '2023-06-28',
            completed: true,
            deleted: false,
            todo: 'Do something',
            description: 'This is a description',
        };

        const result = validateTodoEntity(entity);

        expect(result).toEqual({
            error: 'обязательное поле status_id должно быть целым числом',
        });
    });

    it('должна возвращать объект с полем "error", если validate_category_id не пройдена', () => {
        const entity = {
            todo_id: 1,
            status_id: 1,
            category_id: 'invalid',
            due_date: '2023-06-28',
            completed: true,
            deleted: false,
            todo: 'Do something',
            description: 'This is a description',
        };

        const result = validateTodoEntity(entity);

        expect(result).toEqual({
            error: 'необязательное поле category_id должно быть целым числом',
        });
    });

    it('должна возвращать объект с полем "error", если validate_dueDate не пройдена', () => {
        const entity = {
            todo_id: 1,
            status_id: 1,
            category_id: 2,
            due_date: 123,
            completed: true,
            deleted: false,
            todo: 'Do something',
            description: 'This is a description',
        };

        const result = validateTodoEntity(entity);

        expect(result).toEqual({
            error: 'необязательное поле due_date должно быть строкой ISO 8086',
        });
    });

    it('должна возвращать объект с полем "error", если validate_completed не пройдена', () => {
        const entity = {
            todo_id: 1,
            status_id: 1,
            category_id: 2,
            due_date: '2023-06-28',
            completed: 'invalid',
            deleted: false,
            todo: 'Do something',
            description: 'This is a description',
        };

        const result = validateTodoEntity(entity);

        expect(result).toEqual({
            error: 'поле completed должно быть boolean',
        });
    });

    it('должна возвращать объект с полем "error", если validate_deleted не пройдена', () => {
        const entity = {
            todo_id: 1,
            status_id: 1,
            category_id: 2,
            due_date: '2023-06-28',
            completed: true,
            deleted: 'invalid',
            todo: 'Do something',
            description: 'This is a description',
        };

        const result = validateTodoEntity(entity);

        expect(result).toEqual({
            error: 'поле deleted должно быть boolean',
        });
    });

    it('должна возвращать объект с полем "error", если validate_todo не пройдена', () => {
        const entity = {
            todo_id: 1,
            status_id: 1,
            category_id: 2,
            due_date: '2023-06-28',
            completed: true,
            deleted: false,
            todo: 'Do',
            description: 'This is a description',
        };

        const result = validateTodoEntity(entity);

        expect(result).toEqual({
            error: 'длина названия todo должна быть более 5 символов и не превышать 100 символов',
        });
    });

    it('должна возвращать объект с полем "error", если validateDescription не пройдена', () => {
        const entity = {
            todo_id: 1,
            status_id: 1,
            category_id: 2,
            due_date: '2023-06-28',
            completed: true,
            deleted: false,
            todo: 'Do something',
            description: 'Short',
        };

        const result = validateTodoEntity(entity);

        expect(result).toEqual({
            error: 'длина description должна быть более 10 символов и не превышать 1000 символов',
        });
    });
});

describe('validateNewTodoEntity', () => {
    it('должна возвращать объект с полем "entity", если валидация пройдена', () => {
        const due_date = getTodayDate().toISOString();

        const entity = {
            status_id: 1,
            category_id: 2,
            due_date,
            completed: true,
            deleted: false,
            todo: 'Do something',
            description: 'This is a description',
        };

        const result = validateNewTodoEntity(entity);

        expect(result).toEqual({
            entity: entity,
        });
    });

    it('должна возвращать объект с полем "error", если validate_status_id не пройдена', () => {
        const entity = {
            todo_id: 1,
            status_id: 'invalid',
            category_id: 2,
            due_date: '2023-06-28',
            completed: true,
            deleted: false,
            todo: 'Do something',
            description: 'This is a description',
        };

        const result = validateNewTodoEntity(entity);

        expect(result).toEqual({
            error: 'обязательное поле status_id должно быть целым числом',
        });
    });

    it('должна возвращать объект с полем "error", если validate_category_id не пройдена', () => {
        const entity = {
            todo_id: 1,
            status_id: 1,
            category_id: 'invalid',
            due_date: '2023-06-28',
            completed: true,
            deleted: false,
            todo: 'Do something',
            description: 'This is a description',
        };

        const result = validateNewTodoEntity(entity);

        expect(result).toEqual({
            error: 'необязательное поле category_id должно быть целым числом',
        });
    });

    it('должна возвращать объект с полем "error", если validate_dueDate не пройдена', () => {
        const entity = {
            todo_id: 1,
            status_id: 1,
            category_id: 2,
            due_date: 123,
            completed: true,
            deleted: false,
            todo: 'Do something',
            description: 'This is a description',
        };

        const result = validateNewTodoEntity(entity);

        expect(result).toEqual({
            error: 'необязательное поле due_date должно быть строкой ISO 8086',
        });
    });

    it('должна возвращать объект с полем "error", если validate_completed не пройдена', () => {
        const entity = {
            todo_id: 1,
            status_id: 1,
            category_id: 2,
            due_date: '2023-06-28',
            completed: 'invalid',
            deleted: false,
            todo: 'Do something',
            description: 'This is a description',
        };

        const result = validateNewTodoEntity(entity);

        expect(result).toEqual({
            error: 'поле completed должно быть boolean',
        });
    });

    it('должна возвращать объект с полем "error", если validate_deleted не пройдена', () => {
        const entity = {
            todo_id: 1,
            status_id: 1,
            category_id: 2,
            due_date: '2023-06-28',
            completed: true,
            deleted: 'invalid',
            todo: 'Do something',
            description: 'This is a description',
        };

        const result = validateNewTodoEntity(entity);

        expect(result).toEqual({
            error: 'поле deleted должно быть boolean',
        });
    });

    it('должна возвращать объект с полем "error", если validate_todo не пройдена', () => {
        const entity = {
            todo_id: 1,
            status_id: 1,
            category_id: 2,
            due_date: '2023-06-28',
            completed: true,
            deleted: false,
            todo: 'Do',
            description: 'This is a description',
        };

        const result = validateNewTodoEntity(entity);

        expect(result).toEqual({
            error: 'длина названия todo должна быть более 5 символов и не превышать 100 символов',
        });
    });

    it('должна возвращать объект с полем "error", если validateDescription не пройдена', () => {
        const entity = {
            todo_id: 1,
            status_id: 1,
            category_id: 2,
            due_date: '2023-06-28',
            completed: true,
            deleted: false,
            todo: 'Do something',
            description: 'Short',
        };

        const result = validateNewTodoEntity(entity);

        expect(result).toEqual({
            error: 'длина description должна быть более 10 символов и не превышать 1000 символов',
        });
    });
});
