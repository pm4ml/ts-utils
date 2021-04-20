export interface ValidationMessage {
  active: boolean;
  message: string;
}

export interface ValidationField {
  isValid: boolean;
  isRequired: boolean;
  messages: ValidationMessage[];
  token: unknown[];
  fields?: ValidationFields[];
}

export type ValidationFields = Record<string, ValidationField>;

export interface ValidationResults {
  isValid: boolean;
  fields: ValidationFields;
  messages: ValidationMessage[];
  token: unknown[];
}
