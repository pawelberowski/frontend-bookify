import {
  FilterContainerStyled,
  FilterElementsContainer,
  Motto,
  SearchButton,
} from "./FilterContainer.styled.tsx";
import { Typography } from "@mui/material";
import { FiltersBar } from "./FiltersBar";

export const FiltersContainer = () => {
  return (
    <FilterContainerStyled>
      <FilterElementsContainer>
        <Motto>Find your place and experience it together.</Motto>
        <FiltersBar />
        <SearchButton variant="contained" href="/venues">
          <Typography variant="h5">Search for venue</Typography>
        </SearchButton>
      </FilterElementsContainer>
    </FilterContainerStyled>
  );
};
