import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { ToggleButtons } from "./ToggleButtons";
import { CalendarContainer } from "./CalendarContainer";
import {
  BookButton,
  BookButtonContainer,
  BookingSystemContainer,
  GreyDivider,
  PriceWrapper,
} from "./bookingSystem.styled";
import { FunctionComponent } from "react";
import { useExchangeRateContext } from "../../../shared/ExchangeRateContext/useExchangeRateContext.tsx";
import { getPriceInPln } from "../../../shared/utils/getPriceInPln.ts";

interface Props {
  priceInEur: string | number;
}
export const BookingSystem: FunctionComponent<Props> = ({ priceInEur }) => {
  const { exchangeRate } = useExchangeRateContext();

  if (!exchangeRate) {
    return null;
  }
  const priceInPln = getPriceInPln(priceInEur, exchangeRate.plnPerEur);

  return (
    <BookingSystemContainer>
      <ToggleButtons />
      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label={<Typography variant="body2">just one day</Typography>}
        />
      </FormGroup>
      <CalendarContainer />
      <PriceWrapper>
        <Typography variant="body1">per day</Typography>
        <Typography variant="body1">{`${priceInPln} zł`}</Typography>
      </PriceWrapper>
      <GreyDivider />
      <PriceWrapper>
        <Typography variant="h4">total</Typography>
        <Typography variant="h4">{`${priceInPln} zł`}</Typography>
      </PriceWrapper>
      <BookButtonContainer>
        <BookButton variant="contained">
          <Typography variant="h5">Book</Typography>
        </BookButton>
      </BookButtonContainer>
    </BookingSystemContainer>
  );
};
