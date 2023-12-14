import { SortButton, StyledPaper } from "./SortContainer.styled.tsx";
import { Label, StyledHeader } from "../FiltersHeader/FiltersHeader.styled.tsx";
import React, { FunctionComponent } from "react";
import { Checkbox, FormControlLabel, Slide, Typography } from "@mui/material";
import { StyledBackdrop } from "../Filters.styled.tsx";

interface Props {
  isSortOpen: boolean;
  setIsSortOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const SortContainer: FunctionComponent<Props> = ({
  isSortOpen,
  setIsSortOpen,
}) => {
  return (
    <StyledBackdrop open={isSortOpen}>
      <Slide direction="left" in={isSortOpen}>
        <StyledPaper square={true}>
          <StyledHeader elevation={0} square={true}>
            <Label variant="body1">SORT</Label>
          </StyledHeader>
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography variant="body2">by the most expensive</Typography>
            }
          />
          <FormControlLabel
            control={<Checkbox />}
            label={<Typography variant="body2">by the cheapest</Typography>}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={<Typography variant="body2">by top rated</Typography>}
          />
          <SortButton
            variant="contained"
            onClick={() => setIsSortOpen(!isSortOpen)}
          >
            sort
          </SortButton>
        </StyledPaper>
      </Slide>
    </StyledBackdrop>
  );
};
