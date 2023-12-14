import { useVenuePhotos } from "../../../VenuesList/VenueTiles/VenueTile/useVenuePhotos.tsx";
import { CircularProgress, ImageList, ImageListItem } from "@mui/material";
import { FunctionComponent } from "react";
import { useIsMobileView } from "../../../../shared/utils/useIsMobileView.tsx";

interface GalleryContainer {
  albumId: number;
}
export const GalleryContainer: FunctionComponent<GalleryContainer> = ({
  albumId,
}) => {
  const photos = useVenuePhotos(albumId);
  const isMobile = useIsMobileView();

  function getColumnsNumber(isMobile: boolean) {
    if (isMobile) {
      return 2;
    }
    return 3;
  }

  if (!photos) {
    return <CircularProgress />;
  }

  return (
    <ImageList cols={getColumnsNumber(isMobile)}>
      {photos.map((photo) => {
        return (
          <ImageListItem key={photo.title}>
            <img src={photo.url} alt={photo.title} />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};
