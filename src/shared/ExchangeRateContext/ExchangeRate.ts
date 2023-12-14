export interface ExchangeRate {
  plnPerEur: number;
}
export interface ExchangeRateContextData {
  exchangeRate: ExchangeRate | null;
  fetchExchangeRate: () => void;
}
