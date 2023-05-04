import { checkEntityValidation } from '../validation_utils/validateEntity.ts';
import { getStatusFomUnknownObject, statusValidationRules } from '../validators/status.ts';

export function checkStatusConstraints(
    payload: EntitiesPayload,
    statuses: Status[] | undefined,
    statusIds: IdsHash,
): boolean {
    let isValid = true;
    const newStatuses = [] as Status[];

    statuses!.forEach((status, i) => {
        const { valid, errors } = checkEntityValidation<Status>(status, statusValidationRules, 'Statuses');

        if (valid) {
            newStatuses.push(getStatusFomUnknownObject(status));
            statusIds[status.id] = true;
        } else {
            console.error('Status', { status, errors });
            isValid = false;
            // generate Error
        }
    });

    payload.statuses = newStatuses;

    return isValid;
}
