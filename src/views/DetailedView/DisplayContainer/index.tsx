import { displayDescription, displayGallery } from "../useCurrentDisplay.tsx";
import { DescriptionContainer } from "../DescriptionContainer";
import { GalleryContainer } from "../GalleryContainer";
import { MapContainer } from "../MapContainer";
import { FunctionComponent } from "react";
import { VenueDetails } from "../../../shared/types/VenueDetails.ts";

interface DisplayContainer {
  currentDisplay: string;
  venueDetails: VenueDetails;
}
export const DisplayContainer: FunctionComponent<DisplayContainer> = ({
  currentDisplay,
  venueDetails,
}) => {
  if (currentDisplay === displayDescription) {
    return <DescriptionContainer venueDetails={venueDetails} />;
  }
  if (currentDisplay === displayGallery) {
    return <GalleryContainer albumId={venueDetails.albumId} />;
  }
  return <MapContainer />;
};
