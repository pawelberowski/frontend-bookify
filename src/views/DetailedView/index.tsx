import { Box } from "@mui/material";
import { useVenueDetails } from "./useVenueDetails.tsx";
import { useParams } from "react-router-dom";

export const DetailedView = () => {
  const params = useParams();
  const venueId = Number(params.id);
  const { venueDetails } = useVenueDetails(venueId);

  return (
    venueDetails && (
      <Box>
        <h2>Detailed View of venueId: {venueDetails.venueId}</h2>
        <p>Description: {venueDetails.description}</p>
      </Box>
    )
  );
};
