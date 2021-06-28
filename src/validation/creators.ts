import { ValidatorFunction, Validator, ValidationCreator, Validation } from './types';

const createValidator = (message: string, fn: ValidatorFunction): Validator => ({
  message,
  fn,
});

const buildValidationCreator = (isRequired: boolean): ValidationCreator => (
  validators: Validator[]
): Validation => ({
  isRequired,
  validators,
});

// create functions that will test against all validators
const createValidation = buildValidationCreator(true);
const createOptionalValidation = buildValidationCreator(false);

export default createValidation;
export { createOptionalValidation, createValidator };
