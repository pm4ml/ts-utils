import _isEqual from 'lodash/isEqual';

const isEqual = (a: unknown, b: unknown): boolean => _isEqual(a, b);
export default isEqual;
