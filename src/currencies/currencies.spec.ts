import formatAmount from './formatAmount';
import findCurrencySymbol from './findCurrencySymbol';
import { Currency } from './types';

describe('tests the currencies', () => {
  describe('tests the `findCurrencySymbol`', () => {
    it('Should find the unicode for the USD', () => {
      expect(findCurrencySymbol(Currency.USD)).toBe('$');
    });

    it('Should find the symbol for the XOF', () => {
      expect(findCurrencySymbol(Currency.XOF)).toBe('CAF');
    });

    it('Should not find the symbol for a non existing currency', () => {
      expect(findCurrencySymbol('UNEXISTING')).toBeUndefined();
    });
  });

  describe('tests the `formatAmount`', () => {
    it('Should format to USD with decimals', () => {
      expect(formatAmount(100, Currency.USD)).toBe('$ 100.00');
    });

    it('Should format to EURs with decimals', () => {
      expect(formatAmount(200.23, Currency.EUR)).toBe('€ 200.23');
    });

    it('Should default to USD when currency is not provided', () => {
      expect(formatAmount(100)).toBe('$ 100.00');
    });
  });
});
