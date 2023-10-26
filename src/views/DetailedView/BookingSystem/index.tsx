import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { ToggleButtons } from "./ToggleButtons";
import { CalendarContainer } from "./CalendarContainer";

export const BookingSystem = () => {
  return (
    <Box>
      <ToggleButtons />
      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label={<Typography variant="body2">just one day</Typography>}
        />
      </FormGroup>
      <CalendarContainer />
    </Box>
  );
};
