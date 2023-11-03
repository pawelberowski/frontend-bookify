import { useEffect } from "react";
import { useExchangeRateContext } from "./useExchangeRateContext.tsx";

export function useExchangeRateFetching() {
  const { fetchExchangeRate } = useExchangeRateContext();

  useEffect(() => {
    fetchExchangeRate();
  }, [fetchExchangeRate]);
}
