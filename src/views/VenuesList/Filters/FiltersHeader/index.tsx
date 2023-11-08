import {
  FiltersHeaderContainer,
  Label,
  ResetButton,
} from "./FiltersHeader.styled.tsx";
import { Typography } from "@mui/material";

export const FiltersHeader = () => {
  return (
    <FiltersHeaderContainer elevation={0} square={true}>
      <Label variant="body1">FILTERS</Label>
      <ResetButton variant="text">
        <Typography variant="h5">reset</Typography>
      </ResetButton>
    </FiltersHeaderContainer>
  );
};
