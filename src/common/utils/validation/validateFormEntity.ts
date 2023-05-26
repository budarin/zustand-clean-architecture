type CheckEntityValidation = { isValid: boolean; errors: Record<string, string> };

export function validateFormEntity<T>(
    entity: UnknownObject,
    rules: ValidationRules,
    errorPrefix: string,
): CheckEntityValidation {
    const errors = {} as Record<string, string>;
    let hasNoErrors = true;

    Object.keys(rules).forEach((propName) => {
        const rule = rules[propName];
        const [validator, errorMessage] = rule;

        if (validator(entity) === false) {
            errors[propName] = `${errorPrefix}: ${errorMessage}`;
            hasNoErrors && (hasNoErrors = false);
        }
    });

    return {
        isValid: hasNoErrors,
        errors,
    };
}
