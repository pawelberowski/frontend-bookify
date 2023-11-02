import { createContext } from "react";

export interface ExchangeRate {
  plnPerEur: number;
}
export interface ExchangeRateContextData {
  exchangeRate: ExchangeRate | null;
  fetchExchangeRate: () => void;
}

export const exchangeRateContextDefaultValue = {
  exchangeRate: { plnPerEur: 0 },
  fetchExchangeRate: () => null,
};

export const ExchangeRateContext = createContext<ExchangeRateContextData>(
  exchangeRateContextDefaultValue,
);
