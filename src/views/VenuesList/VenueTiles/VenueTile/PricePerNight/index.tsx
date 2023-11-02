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
  const priceInPln = (Number(priceInEur) * exchangeRate.plnPerEur).toFixed(0);
  return <Typography variant="h5">{`${priceInPln}zł / doba`}</Typography>;
};
