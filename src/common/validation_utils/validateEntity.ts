type CheckEntityValidation = { entity: UnknownObject; error?: never } | { entity?: never; error: string };

export function validateRawEntity(
    entity: UnknownObject,
    rules: ValidationRules,
    errorPrefix: string,
): CheckEntityValidation {
    const keys = Object.keys(rules);

    for (let i = 0; i < keys.length; i++) {
        const propName = keys[i];

        const rule = rules[propName];
        const [validator, errorMessage] = rule;

        if (validator(entity) === false) {
            return {
                error: `${errorPrefix}: ${errorMessage}`,
            };
        }
    }

    return {
        entity,
    };
}
