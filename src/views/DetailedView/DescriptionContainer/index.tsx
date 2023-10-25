import { FunctionComponent } from "react";
import { VenueDetails } from "../../../shared/types/VenueDetails.ts";
import { AmenitiesList } from "./AmenitiesList";
import { StayingDetails } from "./StayingDetails";
import {
  DescriptionPaper,
  DescriptionDivider,
} from "./DescriptionContainer.styled.tsx";
import { Typography } from "@mui/material";

interface DescriptionContainer {
  venueDetails: VenueDetails;
}
export const DescriptionContainer: FunctionComponent<DescriptionContainer> = ({
  venueDetails,
}) => {
  const amenities = [
    ...venueDetails.features.generalAmenities,
    ...venueDetails.features.roomAmenities,
    ...venueDetails.features.handicapAccesibility,
    ...venueDetails.features.neighbourhoods,
  ];

  return (
    <DescriptionPaper square elevation={2}>
      <Typography>{venueDetails.description}</Typography>
      <DescriptionDivider variant="middle" />
      {amenities && <AmenitiesList amenities={amenities} />}
      <DescriptionDivider variant="middle" />
      <StayingDetails venueDetails={venueDetails} />
    </DescriptionPaper>
  );
};
