import isDefined from './isDefined';
import isUndefined from './isUndefined';
import isNull from './isNull';
import isNotNull from './isNotNull';
import isNil from './isNil';
import isNotNil from './isNotNil';
import isEqual from './isEqual';
import isNotEqual from './isNotEqual';

describe('test isDefined', () => {
  it('detects the `undefined` type', () => {
    expect(isDefined(undefined)).toBe(false);
  });

  it('detects everything that is not `undefined` type', () => {
    [false, true, null, {}, [], function () {}].forEach((type) => {
      expect(isDefined(type)).toBe(true);
    });
  });
});

describe('test isUndefined', () => {
  it('detects the `undefined` type', () => {
    expect(isUndefined(undefined)).toBe(true);
  });

  it('detects everything that is not `undefined` type', () => {
    [false, true, null, {}, [], function () {}].forEach((type) => {
      expect(isUndefined(type)).toBe(false);
    });
  });
});

describe('test isNull', () => {
  it('detects the `null` type', () => {
    expect(isNull(null)).toBe(true);
  });

  it('detects everything that is not `null` type', () => {
    [false, true, undefined, {}, [], function () {}].forEach((type) => {
      expect(isNull(type)).toBe(false);
    });
  });
});

describe('test isNotNull', () => {
  it('detects the `null` type', () => {
    expect(isNotNull(null)).toBe(false);
  });

  it('detects everything that is not `null` type', () => {
    [false, true, undefined, {}, [], function () {}].forEach((type) => {
      expect(isNotNull(type)).toBe(true);
    });
  });
});

describe('test isNil', () => {
  it('detects the `null`, `undefined` types', () => {
    expect(isNil(null)).toBe(true);
    expect(isNil(undefined)).toBe(true);
  });

  it('detects everything that is not `null`, `undefined` types', () => {
    [false, true, {}, [], function () {}].forEach((type) => {
      expect(isNil(type)).toBe(false);
    });
  });
});

describe('test isNotNil', () => {
  it('detects the `null`, `undefined` types', () => {
    expect(isNotNil(null)).toBe(false);
    expect(isNotNil(undefined)).toBe(false);
  });

  it('detects everything that is not `null`, `undefined` types', () => {
    [false, true, {}, [], function () {}].forEach((type) => {
      expect(isNotNil(type)).toBe(true);
    });
  });
});

describe('test isEqual', () => {
  it('detects the equal types', () => {
    [false, true, {}, [], null, undefined, String, Number].forEach((type) => {
      expect(isEqual(type, type)).toBe(true);
    });
  });

  it('detects everything that is not the equal types', () => {
    [false, true, {}, [], null, undefined, String, Number].forEach((type) => {
      expect(isEqual(type, 'different type')).toBe(false);
    });
  });
});

describe('test isNotEqual', () => {
  it('detects the `equal` types', () => {
    [false, true, {}, [], null, undefined, String, Number].forEach((type) => {
      expect(isNotEqual(type, type)).toBe(false);
    });
  });

  it('detects everything that is not `equal` types', () => {
    [false, true, {}, Array, function () {}].forEach((type) => {
      expect(isNotEqual(type, 'different type')).toBe(true);
    });
  });
});
