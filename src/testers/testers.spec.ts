import { isDefined, isUndefined } from './index';

describe ('test isDefined', () => {
  it('detects the `undefined` type', () => {
    expect(isDefined(undefined)).toBe(false);
  });

  it('detects everything that is not `undefined` type', () => {
    [false, true, null, {}, Array, function() {} ].forEach(type => {
      expect(isDefined(type)).toBe(true);
    });
  });
})

describe ('test isUndefined', () => {
  it('detects the `undefined` type', () => {
    expect(isUndefined(undefined)).toBe(true);
  });

  it('detects everything that is not `undefined` type', () => {
    [false, true, null, {}, Array, function() {} ].forEach(type => {
      expect(isUndefined(type)).toBe(false)
    });
  });
})
