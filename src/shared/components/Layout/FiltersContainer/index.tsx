import {
  FilterContainerStyled,
  FilterElementsContainer,
  FiltersBar,
  FiltersBarWrapper,
  FilterWrapper,
  Motto,
  SearchButton,
  StyledInput,
  ToggleButton,
} from "./FilterContainer.styled.tsx";
import { Add, CalendarToday, Remove, Search } from "@mui/icons-material";
import { Typography } from "@mui/material";

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
          <ToggleButton variant="text">
            <Typography variant="h5">
              I don't want to be that specific
            </Typography>
          </ToggleButton>
        </FiltersBarWrapper>
        <SearchButton variant="contained" href="/venues">
          <Typography variant="h5">Search for venue</Typography>
        </SearchButton>
      </FilterElementsContainer>
    </FilterContainerStyled>
  );
};
