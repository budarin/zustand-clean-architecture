export type ValidationRules<T> = Record<string, [(x: any) => boolean, string]>;

export function checkEntityValidation<T>(
    entity: object,
    rules: ValidationRules<T>,
    errorPrefix: string,
): { valid: boolean; errors: Record<string, string> } {
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
        valid: hasNoErrors,
        errors,
    };
}
