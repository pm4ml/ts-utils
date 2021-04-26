import { Currency } from './types';
import findCurrencySymbol from './findCurrencySymbol';

export default function formatAmount(amount: number, currency: Currency = Currency.USD): string {
  const symbol = findCurrencySymbol(currency);
  const value = (Math.round(amount * 100) / 100).toFixed(2);

  return `${symbol} ${value}`;
}
