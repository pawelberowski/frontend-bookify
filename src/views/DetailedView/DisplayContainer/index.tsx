import { displayDescription, displayGallery } from "../useCurrentDisplay.tsx";
import { DescriptionContainer } from "../DescriptionContainer";
import { GalleryContainer } from "../GalleryContainer";
import { MapContainer } from "../MapContainer";
import { FunctionComponent } from "react";

interface DisplayContainer {
  currentDisplay: string;
}
export const DisplayContainer: FunctionComponent<DisplayContainer> = ({
  currentDisplay,
}) => {
  if (currentDisplay === displayDescription) {
    return <DescriptionContainer />;
  }
  if (currentDisplay === displayGallery) {
    return <GalleryContainer />;
  }
  return <MapContainer />;
};
