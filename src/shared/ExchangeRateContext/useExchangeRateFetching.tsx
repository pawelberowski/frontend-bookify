import { useContext, useEffect } from "react";
import { ExchangeRateContext } from "./ExchangeRate.ts";

export function useExchangeRateFetching() {
  const { fetchExchangeRate } = useContext(ExchangeRateContext);

  useEffect(() => {
    fetchExchangeRate();
  }, [fetchExchangeRate]);
}
