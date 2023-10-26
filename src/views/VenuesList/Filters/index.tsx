import { PriceRange } from "./PriceRange/PriceRange.tsx";
import { Amenities } from "./Amenities/Amenities.tsx";
import { RoomAmenities } from "./RoomAmenities/RoomAmenities.tsx";
import { Neighbourhoods } from "./Neighbourhoods/Neighbourhoods.tsx";
import { HandicapAccessibility } from "./HandicapAccessibility/HandicapAccessibility.tsx";
import { FiltersContainer } from "./Filters.styled.tsx";
import { FiltersHeader } from "./FiltersHeader";

export const Filters = () => {
  return (
    <FiltersContainer>
      <FiltersHeader />
      <PriceRange />
      <Amenities />
      <RoomAmenities />
      <Neighbourhoods />
      <HandicapAccessibility />
    </FiltersContainer>
  );
};
