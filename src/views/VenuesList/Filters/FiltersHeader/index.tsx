import {
  FiltersHeaderContainer,
  Label,
  ResetButton,
} from "./FiltersHeader.styled.tsx";

export const FiltersHeader = () => {
  return (
    <FiltersHeaderContainer>
      <Label>FILTERS</Label>
      <ResetButton variant="text">reset</ResetButton>
    </FiltersHeaderContainer>
  );
};
