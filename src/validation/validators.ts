import { createValidator } from './creators';
import { Validator } from './types';

/* eslint-disable-next-line max-len */
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const IP_REGEX = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
const URL_REGEX = /^(?![0-9.]{2})([a-zA-Z0-9-]*)([a-zA-Z0-9]{1})$/;
const PASSWORD_REGEX = /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/;
const PHONE_NUM_REGEX = /^(\+?)[0-9.]*$/;
const TEXT_REGEX = /^[a-zA-Z '.]*$/;
const ALPHA_REGEX = /^[a-zA-Z]*$/;
const ALPHANUM_REGEX = /^[a-zA-Z0-9]*$/;

// single validators, use the create validator function to create them
// FIXME: remove all unused validators. Many of these are making large assumptions, and many will
// not ever be necessary in MBAM.
const vd = {
  isURL: createValidator(
    'Must be a valid URL https://url.com/path, http://url.com:8080, http://localhost:8080',
    (value) => /^(ftp|http|https):\/\/[^ "]+$/.test(value)
  ),
  isHost: createValidator('Must be a valid host (IP or hostname)', (value) => {
    return (
      IP_REGEX.test(value) ||
      (value !== undefined && value.split('.').every((chunk) => URL_REGEX.test(chunk)))
    );
  }),
  isPort: createValidator(
    'Must be a valid port',
    // eslint-disable-next-line
    (value) => !Number.isNaN(value) || value === '${http.port}' || value === '${https.port}'
  ),
  isPassword: createValidator('Must be a valid password', (value) => PASSWORD_REGEX.test(value)),
  isEmail: createValidator('Must be a valid Email address', (value) =>
    value ? EMAIL_REGEX.test(value) : false
  ),
  isNum: createValidator('Must be a number', (value) => !Number.isNaN(Number(value))),
  isPhoneNum: createValidator('Must be a phone number', (value) => PHONE_NUM_REGEX.test(value)),
  isText: createValidator('Must be text content', (value) => TEXT_REGEX.test(value)),
  isAlpha: createValidator('Must be alphanumeric', (value) => ALPHA_REGEX.test(value)),
  isAlphaNum: createValidator('Must be alphanumeric', (value) => ALPHANUM_REGEX.test(value)),
  isAlphaNumExtended: createValidator('Must be alphanumeric with extended characters', (value) =>
    /^[a-zA-Z0-9:_-]*$/.test(value)
  ),
  isAlphaNumExtendedWithDots: createValidator(
    'Must be alphanumeric with extended characters and dots',
    (value) => /^[a-zA-Z0-9.:_-]*$/.test(value)
  ),
  isAlphaNumExtendedWithBrackets: createValidator(
    'Must be alphanumeric with extended characters and brackets',
    (value) => /^[a-zA-Z0-9():_-]*$/.test(value)
  ),
  isFilename: createValidator('Must have a valid filename', (value) =>
    /^[a-zA-Z0-9.:_-]*$/.test(value)
  ),
  hasValue: createValidator(
    'Must have a value',
    (value) => value !== undefined && value.replace(/ /g, '').length > 0
  ),
  isRequired: createValidator('Required field', (value) => typeof value !== 'undefined'),
  isNotEmptyString: createValidator(
    'Must not be an empty string',
    (value) => value !== undefined && value.replace(/ /g, '').length > 0
  ),
  // eslint-disable-next-line
  isCharacter: createValidator(
    'Cannot be an alphanumeric character',
    (value) => !ALPHANUM_REGEX.test(value)
  ),
  noSpace: createValidator('Must not contain any space', (value) => !/\s/g.test(value)),

  // configurable validators
  isPositive: createValidator('Must be positive', (value) => {
    if (value === undefined) {
      return true;
    }
    if (!Number.isNaN((value as unknown) as number)) {
      return ((value as unknown) as number) >= 0;
    }
    return false;
  }),
  maxLength: (length: number): Validator =>
    createValidator(`Max length is ${length} character`, (value) =>
      value ? value.length <= length : false
    ),
  isLong: (length: number): Validator =>
    createValidator(`Must be ${length} characters`, (value) => value?.length === length),
  isLongBetween: (start: number, stop: number): Validator =>
    createValidator(
      `Must have from ${start} to ${stop} characters`,
      (value) => value?.length >= start && value?.length <= stop
    ),
};

export default vd;
