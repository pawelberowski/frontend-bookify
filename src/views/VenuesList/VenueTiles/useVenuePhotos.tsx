import { useEffect, useState } from "react";
import axios from "axios";

interface Photo {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}
export const useVenuePhotos = (albumId: number) => {
  const [photos, setPhotos] = useState<Photo[] | null>(null);

  useEffect(() => {
    axios.get<Photo[]>(`${import.meta.env.VITE_PHOTOS_URL}?albumId=${albumId}`).then((response) => {
      setPhotos(response.data);
    });
  }, [albumId]);
  return photos;
};
