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
import { FunctionComponent, useState } from "react";
import { useExchangeRateContext } from "../../../shared/ExchangeRateContext/useExchangeRateContext.tsx";
import { getPriceInPln } from "../../../shared/utils/getPriceInPln.ts";
import { useCalendarDates } from "./useCalendarDates.tsx";
import { getNumberOfDays } from "./getNumberOfDays.tsx";

interface Props {
  priceInEur: string | number;
}
export const BookingSystem: FunctionComponent<Props> = ({ priceInEur }) => {
  const { exchangeRate } = useExchangeRateContext();
  const { value, handleChange } = useCalendarDates();
  const [isRange, setIsRange] = useState(true);
  if (!exchangeRate) {
    return null;
  }

  const handleCheckbox = () => {
    setIsRange(!isRange);
  };

  const priceInPln = getPriceInPln(priceInEur, exchangeRate.plnPerEur);  const numberOfDays = getNumberOfDays(value);

  return (
    <BookingSystemContainer>
      <ToggleButtons value={value} />
      <FormGroup>
        <FormControlLabel
          control={<Checkbox onChange={handleCheckbox} />}
          label={<Typography variant="body2">just one day</Typography>}
        />
      </FormGroup>
      <CalendarContainer
        value={value}
        handleChange={handleChange}
        isRange={isRange}
      />
      <PriceWrapper>
        <Typography variant="body1">per day</Typography>
        <Typography variant="body1">{`${priceInPln} zł`}</Typography>
      </PriceWrapper>
      <GreyDivider />
      <PriceWrapper>
        <Typography variant="h4">total</Typography>
        <Typography variant="h4">{`${
          +priceInPln * (numberOfDays ?? 1)
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
