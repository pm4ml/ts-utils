import * as helpers from './helpers';
import {
  Value,
  NestedRecord,
  Validation,
  ValidationMessage,
  ValidationStructure,
  ValidationResults,
  ValidationResult,
} from './types';

const validate = (value: Value, validation: Validation): ValidationResult => {
  let messages: ValidationMessage[] = [];
  let isValid = true;
  const { isRequired, validators } = validation;

  if (!helpers.isUndefined(validation)) {
    messages = validators.map(({ message }) => ({ active: false, message }));

    validators.forEach((validator, index) => {
      if (helpers.isUndefined(value)) {
        isValid = !isRequired;
        messages[index].active = undefined;
      } else {
        const succeeded = validator.fn(value);
        if (!succeeded) {
          isValid = false;
        }
        messages[index].active = !succeeded;
      }
    });
  }
  return { messages, isValid, isRequired, fields: undefined };
};

function invalidValidationResult(isRequired: boolean) {
  return {
    isRequired,
    isValid: false,
    messages: [],
    fields: undefined,
  };
}

const toValidationResult = <T extends NestedRecord, S extends ValidationStructure<T>>(
  model: T,
  validations: S
): ValidationResults<typeof validations> => {
  const allMessages: ValidationMessage[] = [];
  let allIsValid = true;
  const fields = {};

  Object.keys(validations || {}).forEach((field) => {
    if (!helpers.isNull(model)) {
      const value = model[field];
      const validation = validations?.[field];

      let result: ValidationResults<typeof validation> = invalidValidationResult(false);

      if (helpers.isValidationUndefined(validation)) {
        result = invalidValidationResult(!helpers.isValidationUndefined(validation));
      } else if (helpers.isPrimitiveObject(value)) {
        if (helpers.isValidationObject(validation)) {
          result = toValidationResult(value, validation);
        } else {
          result = invalidValidationResult(!helpers.isValidationUndefined(validation));
        }
      } else if (helpers.isValidationObject(validation)) {
        result = invalidValidationResult(!helpers.isValidationUndefined(validation));
      } else {
        result = validate(value, validation);
      }

      if (!result.isValid) {
        allIsValid = false;
      }

      allMessages.push(...result.messages);

      Object.assign(fields, { [field]: result });
    }
  });

  return {
    isValid: allIsValid,
    messages: allMessages,
    /* @typescript-eslint / ban-ts-comment */
    // @ts-ignore
    fields: Object.keys(fields).length ? fields : undefined,
  };
};

export { validate };
export default toValidationResult;
