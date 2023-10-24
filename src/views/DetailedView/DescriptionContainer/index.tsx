import { FunctionComponent } from "react";
import { VenueDetails } from "../../../shared/types/VenueDetails.ts";
import { AmenitiesList } from "./AmenitiesList";
import { StayingDetails } from "./StayingDetails";
import {
  DescriptionPaper,
  DescriptionDivider,
} from "./DescriptionContainer.styled.tsx";

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
    <DescriptionPaper square elevation={2}>
      <p>{venueDetails.description}</p>
      <DescriptionDivider variant="middle" />
      {amenitiesArray && <AmenitiesList amenities={amenitiesArray} />}
      <DescriptionDivider variant="middle" />
      <StayingDetails venueDetails={venueDetails} />
    </DescriptionPaper>
  );
};
