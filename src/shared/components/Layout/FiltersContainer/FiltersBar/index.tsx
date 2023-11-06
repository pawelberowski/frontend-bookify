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
import { useState } from "react";

export const FiltersBar = () => {
  const [isSpecific, setIsSpecific] = useState(true);

  const handleSpecificButton = () => {
    setIsSpecific(!isSpecific);
  };

  return (
    <FiltersBarContainer>
      {isSpecific ? (
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
      ) : (
        <StyledFiltersBar>
          <FilterWrapper>
            <img src={SearchIcon} alt="Magnifying glass" />
            <StyledInput placeholder="localization" />
          </FilterWrapper>
        </StyledFiltersBar>
      )}
      <SpecificButton variant="text" onClick={handleSpecificButton}>
        {isSpecific ? (
          <Typography variant="h5">I don't want to be that specific</Typography>
        ) : (
          <Typography variant="h5">I want to be more specific</Typography>
        )}
      </SpecificButton>
    </FiltersBarContainer>
  );
};
