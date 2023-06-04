type Validator = (x: UnknownObject) => boolean;
type ValidationRule = [Validator, string];
type ValidationRules = Record<string, ValidationRule>;

type ValidateEntity<T> = { entity: T; error?: never } | { entity?: never; error: string };
