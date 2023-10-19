import { Button } from "@mui/material";
import {
  FilterContainerStyled,
  FilterElementsContainer,
  FiltersBar,
  FiltersBarWrapper,
  FilterWrapper,
  Motto,
  SearchButton,
  StyledInput,
} from "./FilterContainer.styled.tsx";
import { Add, CalendarToday, Remove, Search } from "@mui/icons-material";

export const FiltersContainer = () => {
  return (
    <FilterContainerStyled>
      <FilterElementsContainer>
        <Motto>Find your place and experience it together.</Motto>
        <FiltersBarWrapper>
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
        </FiltersBarWrapper>
        <SearchButton variant="contained" href="/venues">
          Search for venue
        </SearchButton>
      </FilterElementsContainer>
    </FilterContainerStyled>
  );
};
