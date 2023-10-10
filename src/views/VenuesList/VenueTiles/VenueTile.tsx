import { Venue } from "../../../shared/types/Venue.ts";
import { FC } from "react";
import { useVenuePhotos } from "./useVenuePhotos.tsx";

interface VenueTileProps {
  venue: Venue;
}

export const VenueTile: FC<VenueTileProps> = ({ venue }) => {
  const { name, pricePerNightInEUR, location, rating, capacity, albumId } =
    venue;
  const photos = useVenuePhotos(albumId);

  return (
    <div >
      <p>{name}{photos?.[0].url}</p>
      <p>{pricePerNightInEUR}</p>
      <p>{location.name}</p>
      <p>{rating}</p>
      <p>{capacity}</p>
    </div>
  );
};
