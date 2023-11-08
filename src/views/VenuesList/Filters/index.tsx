import { PriceRange } from "./PriceRange/PriceRange.tsx";
import { Amenities } from "./Amenities/Amenities.tsx";
import { RoomAmenities } from "./RoomAmenities/RoomAmenities.tsx";
import { Neighbourhoods } from "./Neighbourhoods/Neighbourhoods.tsx";
import { HandicapAccessibility } from "./HandicapAccessibility/HandicapAccessibility.tsx";
import {
  BackInSortButton,
  FiltersButton,
  FiltersButtonBackIn,
  FiltersContainer,
  StyledBackdrop,
} from "./Filters.styled.tsx";
import { FiltersHeader } from "./FiltersHeader";
import { Box, Slide } from "@mui/material";
import { useState } from "react";
import { useIsMobileView } from "../../../shared/utils/useIsMobileView.tsx";
import { Label, StyledHeader } from "./FiltersHeader/FiltersHeader.styled.tsx";
import {
  SortButton,
  StyledPaper,
} from "./SortContainer/SortContainer.styled.tsx";

export const Filters = () => {
  const isMobileView = useIsMobileView();
  const [isOpen, setIsOpen] = useState(!isMobileView);
  const [isSortOpen, setIsSortOpen] = useState(!isMobileView);

  const filtersElement = (
    <FiltersContainer square={true}>
      <FiltersHeader />
      {isMobileView && (
        <FiltersButton variant="contained" onClick={() => setIsOpen(!isOpen)}>
          filters
        </FiltersButton>
      )}
      <PriceRange />
      <Amenities />
      <RoomAmenities />
      <Neighbourhoods />
      <HandicapAccessibility />
    </FiltersContainer>
  );

  const sortElement = (
    <StyledPaper>
      <StyledHeader elevation={0} square={true}>
        <Label variant="body1">SORT</Label>
      </StyledHeader>
      <SortButton onClick={() => setIsSortOpen(!isSortOpen)}>sort</SortButton>
    </StyledPaper>
  );

  return (
    <Box>
      {isMobileView && (
        <Box>
          <FiltersButtonBackIn
            variant="contained"
            onClick={() => setIsOpen(!isOpen)}
          >
            filters
          </FiltersButtonBackIn>
          <BackInSortButton
            variant="contained"
            onClick={() => setIsSortOpen(!isSortOpen)}
          >
            sort
          </BackInSortButton>
        </Box>
      )}
      {isMobileView ? (
        <Box>
          <StyledBackdrop open={isOpen}>
            <Slide direction="right" in={isOpen}>
              {filtersElement}
            </Slide>
          </StyledBackdrop>
          <StyledBackdrop open={isSortOpen}>
            <Slide direction="left" in={isSortOpen}>
              {sortElement}
            </Slide>
          </StyledBackdrop>
        </Box>
      ) : (
        filtersElement
      )}
    </Box>
  );
};
