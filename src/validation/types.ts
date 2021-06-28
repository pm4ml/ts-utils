// The possible values passed to the tested functions
export type Value = string | number | boolean | undefined;

export type ValidatorFunction = (value: string) => boolean;

export type Validator = {
  message: string;
  fn: ValidatorFunction;
};

export interface ValidationMessage {
  active: boolean | undefined;
  message: string;
}

export type Validation = {
  isRequired: boolean;
  validators: Validator[];
};

export type ValidationCreator = (validators: Validator[]) => Validation;

export type NestedRecord = { [member: string]: ValueOrNestedRecord };

export type ValueOrNestedRecord = Value | NestedRecord;

export type ValidationStructure<T extends NestedRecord> = {
  [Property in keyof Partial<T>]: T[Property] extends NestedRecord
    ? ValidationStructure<T[Property]> | undefined
    : Validation | undefined;
};

export type ValidationResults<T> = {
  isValid: boolean;
  isRequired: boolean;
  messages: ValidationMessage[];
  fields: {
    [Property in keyof T]: ValidationResults<T[Property]>;
  };
};

export type ValidationResult = {
  isValid: boolean;
  isRequired: boolean;
  messages: ValidationMessage[];
  fields: undefined;
};
