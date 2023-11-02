import { useVenuePhotos } from "../../VenuesList/VenueTiles/VenueTile/useVenuePhotos.tsx";
import { CircularProgress, ImageListItem } from "@mui/material";
import { FunctionComponent } from "react";
import { StyledImageList } from "./GalleryContainer.styled.tsx";

interface GalleryContainer {
  albumId: number;
}
export const GalleryContainer: FunctionComponent<GalleryContainer> = ({
  albumId,
}) => {
  const photos = useVenuePhotos(albumId);

  if (!photos) {
    return <CircularProgress />;
  }

  return (
    <StyledImageList rowHeight={200} gap={32}>
      {photos.map((photo) => {
        return (
          <ImageListItem key={photo.title}>
            <img src={photo.url} alt={photo.title} />
          </ImageListItem>
        );
      })}
    </StyledImageList>
  );
};
