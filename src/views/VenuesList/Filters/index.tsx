import { PriceRange } from "./PriceRange/PriceRange.tsx";
import { Amenities } from "./Amenities/Amenities.tsx";
import { RoomAmenities } from "./RoomAmenities/RoomAmenities.tsx";
import { Neighbourhoods } from "./Neighbourhoods/Neighbourhoods.tsx";
import { HandicapAccessibility } from "./HandicapAccessibility/HandicapAccessibility.tsx";
import { FiltersContainer } from "./Filters.styled.tsx";

export const Filters = () => {
  return (
    <FiltersContainer>
      <h2>Filters</h2>
      <PriceRange />
      <Amenities />
      <RoomAmenities />
      <Neighbourhoods />
      <HandicapAccessibility />
    </FiltersContainer>
  );
};
