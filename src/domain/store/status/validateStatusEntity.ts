import { validateStatus } from '../../entities/status/validate.ts';

export function validateStatusEntity(status: UnknownObject, state: TodosState): ValidateEntity<Status> {
    const result = validateStatus(status);

    if (!result.entity) {
        return result;
    }

    const { entity } = result;

    if (
        Object.values(state.statuses.byId).find(
            (item) => item.status === status.status && item.status_id !== status.status_id,
        )
    ) {
        return {
            error: `Статус с названием ${entity.status} уже существует! Название должно быть уникальным.`,
        };
    }

    return {
        entity,
    };
}
