type CheckEntityValidation = { isValid: boolean; error?: string };

export function validateEntity(entity: object, rules: ValidationRules, errorPrefix: string): CheckEntityValidation {
    const keys = Object.keys(rules);

    for (let i = 0; i < keys.length; i++) {
        const propName = keys[i];

        const rule = rules[propName];
        const [validator, errorMessage] = rule;

        if (validator(entity) === false) {
            return {
                isValid: false,
                error: `${errorPrefix}: ${errorMessage}`,
            };
        }
    }

    return {
        isValid: true,
    };
}
