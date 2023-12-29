import { createContext } from "react";
import { ExchangeRateContextData } from "./ExchangeRate.ts";

export const ExchangeRateContext = createContext<
  ExchangeRateContextData | undefined
>(undefined);
