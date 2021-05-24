import _isEqual from 'lodash/isEqual';

const isNotEqual = (a: unknown, b: unknown): boolean => !_isEqual(a, b);
export default isNotEqual;
