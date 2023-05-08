type Validator = (x: UnknownObject) => boolean;
type ValidationRule = [Validator, string];
type ValidationRules = Record<string, ValidationRule>;
