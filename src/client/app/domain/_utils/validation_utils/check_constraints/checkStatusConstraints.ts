import { checkEntityValidation } from '../validateEntity';
import { getStatusFomUnknownObject, statusValidationRules } from '../../../status/validation';

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
            statusIds[status.status_id] = true;
        } else {
            console.error('Status', { status, errors });
            isValid = false;
            // generate Error
        }
    });

    payload.statuses = newStatuses;

    return isValid;
}
