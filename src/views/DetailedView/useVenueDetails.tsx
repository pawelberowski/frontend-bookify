import { useEffect, useState } from "react";
import { VenueDetails } from "../../shared/types/VenueDetails.ts";
import { venuesDetailsApi } from "../../shared/api/venuesDetailsApi.tsx";

export const useVenueDetails = (venueId: number) => {
  const [venueDetails, setVenueDetails] = useState<VenueDetails | null>(null);
  useEffect(() => {
    venuesDetailsApi
      .getVenueDetails(venueId)
      .then((response) => setVenueDetails(response.data[0]));
  }, [venueId]);

  return { venueDetails };
};
