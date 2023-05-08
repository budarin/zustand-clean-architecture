type CheckEntityValidation = { isValid: boolean; error?: string };

export function validateEntity<T>(
    entity: object,
    rules: ValidationRules<T>,
    errorPrefix: string,
): CheckEntityValidation {
    Object.keys(rules).forEach((propName) => {
        const rule = rules[propName];
        const [validator, errorMessage] = rule;

        if (validator(entity) === false) {
            return {
                isvalid: false,
                error: `${errorPrefix}: ${errorMessage}`,
            };
        }
    });

    return {
        isValid: true,
    };
}
