import {
  FiltersHeaderContainer,
  Label,
  ResetButton,
} from "./FiltersHeader.styled.tsx";

export const FiltersHeader = () => {
  return (
    <FiltersHeaderContainer>
      <Label variant="h3">FILTERS</Label>
      <ResetButton variant="text">reset</ResetButton>
    </FiltersHeaderContainer>
  );
};
