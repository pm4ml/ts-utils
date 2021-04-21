import { isDefined, isUndefined, isNull, isNotNull } from './index';

describe('test isDefined', () => {
  it('detects the `undefined` type', () => {
    expect(isDefined(undefined)).toBe(false);
  });

  it('detects everything that is not `undefined` type', () => {
    [false, true, null, {}, Array, function () {}].forEach((type) => {
      expect(isDefined(type)).toBe(true);
    });
  });
});

describe('test isUndefined', () => {
  it('detects the `undefined` type', () => {
    expect(isUndefined(undefined)).toBe(true);
  });

  it('detects everything that is not `undefined` type', () => {
    [false, true, null, {}, Array, function () {}].forEach((type) => {
      expect(isUndefined(type)).toBe(false);
    });
  });
});

describe('test isNull', () => {
  it('detects the `null` type', () => {
    expect(isNull(null)).toBe(true);
  });

  it('detects everything that is not `null` type', () => {
    [false, true, undefined, {}, Array, function () {}].forEach((type) => {
      expect(isNull(type)).toBe(false);
    });
  });
});

describe('test isNotNull', () => {
  it('detects the `null` type', () => {
    expect(isNotNull(null)).toBe(false);
  });

  it('detects everything that is not `null` type', () => {
    [false, true, undefined, {}, Array, function () {}].forEach((type) => {
      expect(isNotNull(type)).toBe(true);
    });
  });
});
