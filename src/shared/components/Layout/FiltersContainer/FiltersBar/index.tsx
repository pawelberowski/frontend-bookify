import { Typography } from "@mui/material";
import {
  FiltersBarContainer,
  FilterWrapper,
  SpecificButton,
  StyledFiltersBar,
  StyledInput,
} from "./FiltersBar.styled.tsx";
import SearchIcon from "../../../../assets/filters-icons/search.svg";
import CalendarIcon from "../../../../assets/filters-icons/calendar.svg";
import MinusIcon from "../../../../assets/filters-icons/minus.svg";
import PlusIcon from "../../../../assets/filters-icons/plus.svg";

export const FiltersBar = () => {
  return (
    <FiltersBarContainer>
      <StyledFiltersBar>
        <FilterWrapper>
          <img src={SearchIcon} alt="Magnifying glass" />
          <StyledInput placeholder="localization" />
        </FilterWrapper>
        <FilterWrapper>
          <img src={SearchIcon} alt="Magnifying glass" />
          <StyledInput placeholder="occasion" />
        </FilterWrapper>
        <FilterWrapper>
          <img src={CalendarIcon} alt="Calendar" />
          <StyledInput placeholder="date" />
        </FilterWrapper>
        <FilterWrapper>
          <img src={MinusIcon} alt="Minus" />
          <StyledInput placeholder="guests" />
          <img src={PlusIcon} alt="plus" />
        </FilterWrapper>
        <FilterWrapper>
          <img src={SearchIcon} alt="Magnifying glass" />
          <StyledInput placeholder="venue type" />
        </FilterWrapper>
      </StyledFiltersBar>
      <SpecificButton variant="text">
        <Typography variant="h5">I don't want to be that specific</Typography>
      </SpecificButton>
    </FiltersBarContainer>
  );
};
