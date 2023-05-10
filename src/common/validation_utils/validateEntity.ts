export function validateRawEntity<T>(
    entity: UnknownObject,
    rules: ValidationRules,
    errorPrefix: string,
): ValidateEntity<T> {
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
        entity: entity as T,
    };
}
