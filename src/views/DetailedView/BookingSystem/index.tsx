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
import { FunctionComponent, useContext } from "react";
import { ExchangeRateContext } from "../../../shared/ExchangeRateContext/ExchangeRate.ts";

interface Props {
  priceInEur: string | number;
}
export const BookingSystem: FunctionComponent<Props> = ({ priceInEur }) => {
  const { exchangeRate } = useContext(ExchangeRateContext);

  if (!exchangeRate) {
    return null;
  }
  const priceInPLN = (Number(priceInEur) * exchangeRate.plnPerEur).toFixed(0);

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
        <Typography variant="body1">{`${priceInPLN} zł`}</Typography>
      </PriceWrapper>
      <GreyDivider />
      <PriceWrapper>
        <Typography variant="h4">total</Typography>
        <Typography variant="h4">{`${priceInPLN} zł`}</Typography>
      </PriceWrapper>
      <BookButtonContainer>
        <BookButton variant="contained">
          <Typography variant="h5">Book</Typography>
        </BookButton>
      </BookButtonContainer>
    </BookingSystemContainer>
  );
};
