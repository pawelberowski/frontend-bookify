import { axiosInstance } from "../utils/axiosInstance.ts";
import { VenueDetails } from "../types/VenueDetails.ts";

const ORGANISATIONS_URL = "venuesDetails";

export const getVenueDetails = (venueId: number) => {
  return axiosInstance.get<VenueDetails[]>(
    `${ORGANISATIONS_URL}?venueId=${venueId}`,
  );
};

export const venuesDetailsApi = {
  getVenueDetails,
};
