import { validateIconEntity } from '../../entities/icon/index.ts';
import { createValidationError } from '../../entities/validation_utils/createValidationError.ts';

export function validateIcon(
    icon: UnknownObject,
    state: TodosState,
    operation: ClientStateEntityOperations,
): ValidateEntity<Icon> {
    const result = validateIconEntity(icon);

    if (!result.entity) {
        return result;
    }

    const { entity } = result;

    if (operation === 'add' || operation === 'update') {
        if (isIconIdExists(state, entity.icon_id)) {
            return createValidationError(`Нарушение уникальности ключа иконки`);
        }

        if (isIconNameNotUnique(state, entity)) {
            return createValidationError(`Нарушение уникальности имени иконки`);
        }
    }

    return {
        entity,
    };
}

function isIconIdExists(state: TodosState, icon_id: number): boolean {
    return state.icons.ids.includes(icon_id) === true;
}

function isIconNameNotUnique(state: TodosState, entity: Icon) {
    return Object.values(state.icons.byId).find(
        (item) => item.icon_name === entity.icon_name && item.icon_id !== entity.icon_id,
    );
}
