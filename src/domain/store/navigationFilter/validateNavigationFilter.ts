import { createValidationError } from '../../entities/validation_utils/createValidationError.ts';
import { navigationFilterKeys, navigationFilterTitles, navigationFilterTypeValues } from './index.ts';

export function validateNavigationFilter(filter: UnknownObject, state: TodosState): ValidateEntity<NavigationFilter> {
    const entity = getNavigationFilterFomObject(filter);

    const { type, title, key } = entity;

    if (typeof title !== 'string') {
        return createValidationError('Не верный тип названия фильтра');
    }

    if (typeof type !== 'string' || !navigationFilterTypeValues.includes(type)) {
        return createValidationError('Не верный тип фильтра');
    }

    switch (type) {
        case 'filter': {
            if (typeof key !== 'string' || !navigationFilterKeys.includes(key)) {
                return createValidationError('Не верный типидентификатора фильтра');
            }

            if (!navigationFilterTitles.includes(title)) {
                return createValidationError('Не верный тип названия фильтра');
            }

            break;
        }
        case 'category': {
            if (!isCategoryExists(state, title)) {
                return createValidationError('Не верный тип названия фильтра категорий');
            }

            if (typeof key !== 'number' || !state.categories.ids.includes(key)) {
                return createValidationError('Не верный типидентификатора фильтра категорий');
            }
            break;
        }
        case 'calendar': {
            if (typeof key !== 'number') {
                return createValidationError('Не верный типидентификатора в фильтре календаря');
            }

            const dt = new Date(key);
            if (isNaN(dt.getTime())) {
                return createValidationError('Не верный ключ в фильтре календаря');
            }
            break;
        }

        default:
            break;
    }

    return {
        entity: entity as NavigationFilter,
    };
}

function getNavigationFilterFomObject(input: UnknownObject = {}): { type: unknown; title: unknown; key: unknown } {
    const { type, title, key } = input;

    return {
        type,
        title,
        key,
    };
}

function isCategoryExists(state: TodosState, title: string): boolean {
    return Object.values(state.categories.byId)
        .map((item) => item.category)
        .includes(title);
}
