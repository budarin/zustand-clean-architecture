import { validateStatus } from '../../../../src/domain/entities/status/validation';

export function validateStatusEntity(status: UnknownObject, state: TodosState): ValidateEntity<Status> {
    const result = validateStatus(status);

    if (!result.entity) {
        return result;
    }

    const { entity } = result;

    if (Object.values(state.statuses.byId).find((item) => item.status === status.status)) {
        return {
            error: 'Нарушение уникальности ключа statuses!',
        };
    }

    return {
        entity,
    };
}
