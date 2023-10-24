import { FunctionComponent } from "react";
import { VenueDetails } from "../../../shared/types/VenueDetails.ts";

interface DescriptionContainer {
  venueDetails: VenueDetails;
}
export const DescriptionContainer: FunctionComponent<DescriptionContainer> = ({
  venueDetails,
}) => {
  return <p>{venueDetails.description}</p>;
};
