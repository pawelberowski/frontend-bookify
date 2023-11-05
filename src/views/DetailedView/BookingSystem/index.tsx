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
import { useCalendarDates } from "./useCalendarDates.tsx";

interface Props {
  priceInEur: string | number;
}
export const BookingSystem: FunctionComponent<Props> = ({ priceInEur }) => {
  const { exchangeRate } = useExchangeRateContext();
  const { value, handleChange } = useCalendarDates();

  if (!exchangeRate) {
    return null;
  }

  const priceInPLN = (Number(priceInEur) * exchangeRate.plnPerEur).toFixed(0);
  const startDate = value[0]?.getTime();
  const endDate = value[1]?.getTime();
  const oneDay = 24 * 60 * 60 * 1000;
  const numberOfDays = Math.round(
    Math.abs(((endDate ?? 2 * oneDay) - (startDate ?? oneDay)) / oneDay),
  );

  return (
    <BookingSystemContainer>
      <ToggleButtons value={value} />
      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label={<Typography variant="body2">just one day</Typography>}
        />
      </FormGroup>
      <CalendarContainer value={value} handleChange={handleChange} />
      <PriceWrapper>
        <Typography variant="body1">per day</Typography>
        <Typography variant="body1">{`${priceInPLN} zł`}</Typography>
      </PriceWrapper>
      <GreyDivider />
      <PriceWrapper>
        <Typography variant="h4">total</Typography>
        <Typography variant="h4">{`${
          +priceInPLN * numberOfDays
        } zł`}</Typography>
      </PriceWrapper>
      <BookButtonContainer>
        <BookButton variant="contained">
          <Typography variant="h5">Book</Typography>
        </BookButton>
      </BookButtonContainer>
    </BookingSystemContainer>
  );
};
