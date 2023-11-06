import { PriceRange } from "./PriceRange/PriceRange.tsx";
import { Amenities } from "./Amenities/Amenities.tsx";
import { RoomAmenities } from "./RoomAmenities/RoomAmenities.tsx";
import { Neighbourhoods } from "./Neighbourhoods/Neighbourhoods.tsx";
import { HandicapAccessibility } from "./HandicapAccessibility/HandicapAccessibility.tsx";
import { FiltersContainer } from "./Filters.styled.tsx";
import { FiltersHeader } from "./FiltersHeader";
import { Box, Button, Slide } from "@mui/material";
import { useState } from "react";
import { useIsMobileView } from "../../../shared/utils/useIsMobileView.tsx";

export const Filters = () => {
  const isMobileView = useIsMobileView();
  const [isOpen, setIsOpen] = useState(!isMobileView);

  return (
    <Box>
      {isMobileView && <Button onClick={() => setIsOpen(!isOpen)}>Show</Button>}
      <Slide direction="right" in={isOpen} mountOnEnter unmountOnExit>
        <FiltersContainer>
          <FiltersHeader />
          <PriceRange />
          <Amenities />
          <RoomAmenities />
          <Neighbourhoods />
          <HandicapAccessibility />
        </FiltersContainer>
      </Slide>
    </Box>
  );
};
