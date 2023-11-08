import { SortButton, StyledPaper } from "./SortContainer.styled.tsx";
import { Label, StyledHeader } from "../FiltersHeader/FiltersHeader.styled.tsx";
import React, { FunctionComponent } from "react";

interface Props {
  isSortOpen: boolean;
  setIsSortOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const SortContainer: FunctionComponent<Props> = ({
  isSortOpen,
  setIsSortOpen,
}) => {
  return (
    <StyledPaper>
      <StyledHeader elevation={0} square={true}>
        <Label variant="body1">SORT</Label>
      </StyledHeader>
      <SortButton onClick={() => setIsSortOpen(!isSortOpen)}>sort</SortButton>
    </StyledPaper>
  );
};
