import _isEqual from 'lodash/isEqual';

const isDefined = (value: unknown): boolean => value !== undefined;

const isUndefined = (value: unknown): boolean => value === undefined;

const isNull = (value: unknown): boolean => value === null;

const isNotNull = (value: unknown): boolean => value !== null;

const isEqual = (a: unknown, b: unknown): boolean => _isEqual(a, b);

const isNotEqual = (a: unknown, b: unknown): boolean => !_isEqual(a, b);

const isNil = (value: unknown): boolean => value === undefined || value === null;

const isNotNil = (value: unknown): boolean => value !== undefined && value !== null;

export { isUndefined, isDefined, isNull, isNotNull, isNil, isNotNil, isEqual, isNotEqual };
