import { useContext } from "react";
import { ExchangeRateContext } from "./ExchangeRateContext.tsx";

export function useExchangeRateContext() {
  const exchangeRateContext = useContext(ExchangeRateContext);
  if (!exchangeRateContext) {
    throw new Error(
      "useExchangeRateContext must be used within the ExchangeRateContext.Provider",
    );
  }
  return exchangeRateContext;
}
