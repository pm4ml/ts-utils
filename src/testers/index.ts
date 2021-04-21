import _isEqual from 'lodash/isEqual';

const isDefined = (value: unknown): boolean => value !== undefined;

const isUndefined = (value: unknown): boolean => value === undefined;

const isEqual = (a: unknown, b: unknown): boolean => _isEqual(a, b);

const isNotEqual = (a: unknown, b: unknown): boolean => !_isEqual(a, b);

const isNil = (value: unknown): boolean => value === undefined || value === null;

const isNotNil = (value: unknown): boolean => value !== undefined && value !== null;

const isNotEmptyCollection = (collection: unknown[]): boolean => collection.length > 0;

const getAnyIs = (value: unknown) => (...args: unknown[]): boolean =>
  args.some((arg) => arg === value);

const getAllAre = (value: unknown) => (...args: unknown[]): boolean =>
  args.every((arg) => arg === value);

const getAnyIsDefined = (...args: unknown[]): boolean => args.some(isDefined);

const getAnyIsNotNil = (...args: unknown[]): boolean => args.some(isNotNil);

export {
  getAnyIs,
  getAllAre,
  getAnyIsDefined,
  getAnyIsNotNil,
  isNotEqual,
  isDefined,
  isNil,
  isNotNil,
  isUndefined,
  isEqual,
  isNotEmptyCollection,
};
