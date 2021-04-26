import { SymbolCurrency, CurrencySymbol } from './types';
import currencies from './currencies';

function isSymbolCurrency(currencySymbol: CurrencySymbol): currencySymbol is SymbolCurrency {
  return (<SymbolCurrency>currencySymbol).symbol !== undefined;
}

export default function getCurrencySymbol(currency: string): string | undefined {
  const reference = currencies[currency];
  if (!reference) {
    return undefined;
  }

  if (isSymbolCurrency(reference)) {
    return reference.symbol;
  }

  return reference.unicode
    .split(', ')
    .map((unicode) => {
      return String.fromCharCode(Number(`0x${unicode.padStart(4, '0')}`));
    })
    .join('');
}
