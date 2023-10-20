import { useEffect, useState } from "react";
import { axiosInstance } from "../../shared/utils/axiosInstance.ts";
import { Venue } from "../../shared/types/Venue.ts";

export const useVenuesList = () => {
  const [venues, setVenues] = useState<Venue[] | null>(null);
  useEffect(() => {
    axiosInstance.get<Venue[]>("/venues").then((response) => {
      setVenues(response.data);
    });
  }, []);
  return { venues };
};
