import { Typography } from "@mui/material";
import { FiltersBarContainer, SpecificButton } from "./FiltersBar.styled.tsx";
import { useState } from "react";
import { useIsMobileView } from "../../../../utils/useIsMobileView.tsx";
import { SpecificFilters } from "./SpecificFilters";
import { GeneralFilters } from "./GeneralFilters";

export const FiltersBar = () => {
  const isMobileView = useIsMobileView();
  const [isSpecific, setIsSpecific] = useState(!isMobileView);

  const handleSpecificButton = () => {
    setIsSpecific(!isSpecific);
  };

  return (
    <FiltersBarContainer>
      <SpecificFilters isSpecific={isSpecific} />
      <GeneralFilters isSpecific={isSpecific} />
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
