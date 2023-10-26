import { Typography } from "@mui/material";
import {
  LeftToggleButton,
  RightToggleButton,
  StyledButtonGroup,
} from "./toggleButtons.styled.tsx";

export const ToggleButtons = () => {
  return (
    <StyledButtonGroup>
      <LeftToggleButton value="starts">
        <Typography variant="h5">starts at</Typography>
      </LeftToggleButton>
      <RightToggleButton value="ends">
        <Typography variant="h5">ends at</Typography>
      </RightToggleButton>
    </StyledButtonGroup>
  );
};
