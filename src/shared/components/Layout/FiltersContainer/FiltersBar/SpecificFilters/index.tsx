import {
  FilterWrapper,
  StyledFiltersBar,
  StyledInput,
} from "../FiltersBar.styled.tsx";
import SearchIcon from "../../../../../assets/filters-icons/search.svg";
import CalendarIcon from "../../../../../assets/filters-icons/calendar.svg";
import MinusIcon from "../../../../../assets/filters-icons/minus.svg";
import PlusIcon from "../../../../../assets/filters-icons/plus.svg";
import { FunctionComponent } from "react";

export const SpecificFilters: FunctionComponent<{ isSpecific: boolean }> = ({
  isSpecific,
}) => {
  if (!isSpecific) {
    return null;
  }
  return (
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
  );
};
