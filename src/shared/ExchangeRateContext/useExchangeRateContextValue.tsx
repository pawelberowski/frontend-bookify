import { ExchangeRate, ExchangeRateContextData } from "./ExchangeRate.ts";
import { useCallback, useState } from "react";
import axios from "axios";

export function useExchangeRateContextValue(): ExchangeRateContextData {
  const [exchangeRate, setExchangeRate] = useState<ExchangeRate | null>(null);

  const fetchExchangeRate = useCallback(() => {
    axios
      .get("https://api.freecurrencyapi.com/v1/latest", {
        headers: {
          apikey: import.meta.env.VITE_EXCHANGE_API_KEY,
        },
        params: {
          base_currency: "EUR",
          currencies: "PLN",
        },
      })
      .then((response) => {
        setExchangeRate({
          plnPerEur: response.data.data["PLN"],
        });
      });
  }, [setExchangeRate]);

  return {
    exchangeRate,
    fetchExchangeRate,
  };
}
