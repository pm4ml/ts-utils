import { Value, NestedRecord, Validation, ValidationStructure } from './types';

export const isNull = (item: unknown): boolean => item === null;
export const isUndefined = (item: unknown): boolean => item === undefined;
export const isObject = (item: unknown): boolean => typeof item === 'object';

export const isPrimitiveObject = (item: Value | NestedRecord): item is NestedRecord =>
  isObject(item) && !Array.isArray(item);

export const isValidationUndefined = (
  validation: Validation | ValidationStructure<NestedRecord> | undefined
): validation is undefined => {
  return validation === undefined;
};

export const isValidationObject = <T extends NestedRecord = Record<string, never>>(
  validation: Validation | ValidationStructure<T> | undefined
): validation is ValidationStructure<T> => {
  return typeof isObject(validation?.validators) && !Array.isArray(validation?.validators);
};
