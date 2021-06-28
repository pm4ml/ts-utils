import get from 'lodash/get';
import { NestedRecord, ValidationMessage, ValidationResults } from './types';

const getMessages = <T extends ValidationResults<unknown>>(result: T): ValidationMessage[] =>
  result.messages;

const getIsValid = <T extends ValidationResults<unknown>>(result: T): boolean => result.isValid;

const getFieldPath = (field: string): string => `${field.split('.').join('.fields.')}`;

const getFieldMessages = (field: string) => <T extends ValidationResults<unknown>>(
  result: T
): ValidationMessage[] => {
  const path = getFieldPath(field);
  return get(result, `fields.${path}.messages`);
};

const getFieldIsValid = (field: string) => <T extends ValidationResults<unknown>>(
  result: T
): boolean => {
  const path = getFieldPath(field);
  return get(result, `fields.${path}.isValid`);
};

export { getMessages, getIsValid, getFieldMessages, getFieldIsValid };
