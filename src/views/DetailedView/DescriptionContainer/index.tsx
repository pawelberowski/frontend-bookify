import { FunctionComponent } from "react";
import { VenueDetails } from "../../../shared/types/VenueDetails.ts";
import { Box } from "@mui/material";
import { AmenitiesList } from "./AmenitiesList";

interface DescriptionContainer {
  venueDetails: VenueDetails;
}
export const DescriptionContainer: FunctionComponent<DescriptionContainer> = ({
  venueDetails,
}) => {
  const amenitiesString =
    venueDetails.features.generalAmenities.join() +
    "," +
    venueDetails.features.roomAmenities.join() +
    "," +
    venueDetails.features.handicapAccesibility.join() +
    "," +
    venueDetails.features.neighbourhoods.join();
  const amenitiesArray = amenitiesString.split(",");

  return (
    <Box>
      <p>{venueDetails.description}</p>
      {amenitiesArray && <AmenitiesList amenities={amenitiesArray} />}
    </Box>
  );
};
