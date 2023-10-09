import { Container } from "@mui/material";

import { PriceRange } from "./PriceRange.tsx";
import { Amenities } from "./Amenities.tsx";
import { RoomAmenities } from "./RoomAmenities.tsx";
import {Neighbourhoods} from "./Neighbourhoods.tsx";
import {HandicapAccessibility} from "./HandicapAccessibility.tsx";

export const Filters = () => {
  return (
    <Container>
      <h2>Filters</h2>
      <PriceRange />
      <Amenities />
      <RoomAmenities />
      <Neighbourhoods />
      <HandicapAccessibility />
    </Container>
  );
};
