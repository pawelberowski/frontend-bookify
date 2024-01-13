import { FunctionComponent } from "react";
import {
  FilterWrapper,
  StyledFiltersBar,
  StyledInput,
} from "../FiltersBar.styled.tsx";
import SearchIcon from "../../../../../assets/filters-icons/search.svg";

export const GeneralFilters: FunctionComponent<{ isSpecific: boolean }> = ({
  isSpecific,
}) => {
  if (isSpecific) {
    return null;
  }
  return (
    <StyledFiltersBar>
      <FilterWrapper>
        <img src={SearchIcon} alt="Magnifying glass" />
        <StyledInput placeholder="localization" />
      </FilterWrapper>
    </StyledFiltersBar>
  );
};
