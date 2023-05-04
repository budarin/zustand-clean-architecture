import { checkEntityValidation } from '../validation_utils/validateEntity.ts';
import { getIconFomUnknownObject, iconValidationRules } from '../validators/icon.ts';

export function checkIconConstraints(payload: EntitiesPayload, icons: Icon[] | undefined, iconIds: IdsHash): boolean {
    let isValid = true;
    const newIcons = [] as Icon[];

    icons!.forEach((icon, i) => {
        const { valid, errors } = checkEntityValidation<Icon>(icon, iconValidationRules, 'Icons');

        if (valid) {
            newIcons.push(getIconFomUnknownObject(icon));
            iconIds[icon.id] = true;
        } else {
            console.error('Icon', { icon, errors });
            isValid = false;
            // generate Error
        }
    });

    payload.icons = newIcons;

    return isValid;
}
