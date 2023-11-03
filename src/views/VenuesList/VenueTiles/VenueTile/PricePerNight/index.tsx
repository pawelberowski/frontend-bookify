import { Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { useExchangeRateContext } from "../../../../../shared/ExchangeRateContext/useExchangeRateContext.tsx";

interface Props {
  priceInEur: string;
}
export const PricePerNight: FunctionComponent<Props> = ({ priceInEur }) => {
  const { exchangeRate } = useExchangeRateContext();
  if (!exchangeRate) {
    return null;
  }
  const priceInPln = (Number(priceInEur) * exchangeRate.plnPerEur).toFixed(0);
  return <Typography variant="h5">{`${priceInPln}zł / doba`}</Typography>;
};
