import { validateStatusEntity } from '../../entities/status/index.ts';
import { createValidationError } from '../../entities/validation_utils/createValidationError.ts';

export function validateStatus(
    status: UnknownObject,
    state: TodosState,
    operation: ClientStateEntityOperations,
): ValidateEntity<Status> {
    const result = validateStatusEntity(status);

    if (!result.entity) {
        return result;
    }

    const { entity } = result;

    if (operation === 'add') {
        if (isStatusIdExists(state, entity.status_id)) {
            return createValidationError(`Нарушение уникальности ключа статуса.`);
        }

        if (isStatusNameNotUnique(state, entity)) {
            return createValidationError(`Нарушение уникальности имени статуса.`);
        }
    }

    return {
        entity,
    };
}

function isStatusIdExists(state: TodosState, status_id: number): boolean {
    return state.statuses.ids.includes(status_id) === true;
}

function isStatusNameNotUnique(state: TodosState, entity: Status) {
    return Object.values(state.statuses.byId).find(
        (item) => item.status === entity.status && item.status_id !== entity.status_id,
    );
}
