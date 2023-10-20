import { Button } from "@mui/material";
import {
  FilterContainerStyled,
  FiltersBar,
  FilterWrapper,
  Motto,
  SearchButton,
  StyledInput,
} from "./FilterContainer.styled.tsx";
import { Add, CalendarToday, Remove, Search } from "@mui/icons-material";

export const FiltersContainer = () => {
  return (
    <FilterContainerStyled>
      <Motto>Find your place and experience it together.</Motto>
      <FiltersBar>
        <FilterWrapper>
          <Search />
          <StyledInput placeholder="localization" />
        </FilterWrapper>
        <FilterWrapper>
          <Search />
          <StyledInput placeholder="occasion" />
        </FilterWrapper>
        <FilterWrapper>
          <CalendarToday />
          <StyledInput placeholder="date" />
        </FilterWrapper>
        <FilterWrapper>
          <Remove />
          <StyledInput placeholder="guests" />
          <Add />
        </FilterWrapper>
        <FilterWrapper>
          <Search />
          <StyledInput placeholder="venue type" />
        </FilterWrapper>
      </FiltersBar>
      <Button variant="text">I don't want to be that specific</Button>
      <SearchButton variant="contained" href="/venues">
        Search for venue
      </SearchButton>
    </FilterContainerStyled>
  );
};
