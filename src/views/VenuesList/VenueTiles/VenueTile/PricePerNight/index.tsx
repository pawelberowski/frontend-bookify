import { Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { useExchangeRateContext } from "../../../../../shared/ExchangeRateContext/useExchangeRateContext.tsx";
import { getPriceInPln } from "../../../../../shared/utils/getPriceInPln.ts";

interface Props {
  priceInEur: string;
}
export const PricePerNight: FunctionComponent<Props> = ({ priceInEur }) => {
  const { exchangeRate } = useExchangeRateContext();
  if (!exchangeRate) {
    return null;
  }
  return (
    <Typography variant="h5">{`${getPriceInPln(
      priceInEur,
      exchangeRate.plnPerEur,
    )}zł / doba`}</Typography>
  );
};
