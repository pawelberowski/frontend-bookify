import { PriceRange } from "./PriceRange/PriceRange.tsx";
import { Amenities } from "./Amenities/Amenities.tsx";
import { RoomAmenities } from "./RoomAmenities/RoomAmenities.tsx";
import { Neighbourhoods } from "./Neighbourhoods/Neighbourhoods.tsx";
import { HandicapAccessibility } from "./HandicapAccessibility/HandicapAccessibility.tsx";
import {
  FiltersButton,
  FiltersButtonBackIn,
  FiltersContainer,
  StyledBackdrop,
} from "./Filters.styled.tsx";
import { FiltersHeader } from "./FiltersHeader";
import { Box, Slide } from "@mui/material";
import { useState } from "react";
import { useIsMobileView } from "../../../shared/utils/useIsMobileView.tsx";

export const Filters = () => {
  const isMobileView = useIsMobileView();
  const [isOpen, setIsOpen] = useState(!isMobileView);

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

  return (
    <Box>
      {isMobileView && (
        <FiltersButtonBackIn
          variant="contained"
          onClick={() => setIsOpen(!isOpen)}
        >
          filters
        </FiltersButtonBackIn>
      )}
      {isMobileView ? (
        <StyledBackdrop open={isOpen}>
          <Slide direction="right" in={isOpen}>
            {filtersElement}
          </Slide>
        </StyledBackdrop>
      ) : (
        filtersElement
      )}
    </Box>
  );
};
