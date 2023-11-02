import { Typography } from "@mui/material";
import { FunctionComponent, useContext } from "react";
import { ExchangeRateContext } from "../../../../../shared/ExchangeRateContext/ExchangeRate.ts";

interface Props {
  priceInEur: string;
}
export const PricePerNight: FunctionComponent<Props> = ({ priceInEur }) => {
  const { exchangeRate } = useContext(ExchangeRateContext);
  if (!exchangeRate) {
    return null;
  }
  const price = Number(priceInEur) * exchangeRate.plnPerEur;
  return <Typography variant="h5">{price.toFixed(2)}</Typography>;
};
