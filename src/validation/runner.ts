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
      if (helpers.isUndefined(value) || helpers.isNull(value)) {
        isValid = !isRequired;
        messages[index].active = undefined;
      } else {
        const succeeded = validator.fn(value as string);
        if (!succeeded) {
          isValid = false;
        }
        messages[index].active = !succeeded;
      }
    });
  }
  return { messages, isValid, isRequired };
};

function buildValidationResult(isRequired: boolean, isValid: boolean): ValidationResult {
  return {
    isRequired,
    isValid,
    messages: [],
  };
}

const toValidationResult = <T extends NestedRecord, S extends ValidationStructure<T>>(
  model: T,
  validations: S
): ValidationResults<typeof validations> => {
  const allMessages: ValidationMessage[] = [];
  let everyIsValid = true;
  const fields = {};

  Object.keys(validations || {}).forEach((field) => {
    const value = model[field];
    const validation = validations?.[field];

    let result;

    if (helpers.isValidationUndefined(validation)) {
      // no validation, valid!
      result = buildValidationResult(false, true);
    } else if (helpers.isNestedValue(value) && helpers.isNestedValidation(validation)) {
      // nested validation
      result = toValidationResult(value, validation);
    } else if (!helpers.isNestedValue(value) && !helpers.isNestedValidation(validation)) {
      // validate single field
      result = validate(value, validation as Validation);
    } else {
      // validation and value structure do not match, invalid
      result = buildValidationResult(true, false);
    }

    // it only takes one to make the validation invalid
    if (!result.isValid) {
      everyIsValid = false;
    }

    // add all messages for this object
    allMessages.push(...result.messages);

    // assign the results to the field
    Object.assign(fields, { [field]: result });
  });

  return {
    isValid: everyIsValid,
    messages: allMessages,
    // @ts-ignore
    fields,
  };
};

// const runners = {
//   obj_obj:
//   value_value:
// }

export { validate };
export default toValidationResult;
