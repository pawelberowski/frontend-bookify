import { useEffect, useState } from "react";
import { VenueDetails } from "../../shared/types/VenueDetails.ts";
import { axiosInstance } from "../../shared/utils/axiosInstance.ts";

export const useVenueDetails = (venueId: number) => {
  const [venueDetails, setVenueDetails] = useState<VenueDetails | null>(null);
  useEffect(() => {
    axiosInstance
      .get<VenueDetails[]>(`/venuesDetails?venueId=${venueId}`)
      .then((response) => setVenueDetails(response.data[0]));
  }, [venueId]);

  return { venueDetails };
};
