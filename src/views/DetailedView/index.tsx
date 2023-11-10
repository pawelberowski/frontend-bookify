import { useVenueDetails } from "./useVenueDetails.tsx";
import { useParams } from "react-router-dom";
import { BackButton, DetailedViewContainer } from "./DetailedView.styled.tsx";
import { VenueDetailsComponent } from "./VenueDetailsComponent";
import { VenueBookingComponent } from "./VenueBookingComponent";
import { Box, Typography } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
export const DetailedView = () => {
  const params = useParams();
  const venueId = Number(params.id);
  const { venueDetails } = useVenueDetails(venueId);

  return (
    venueDetails && (
      <Box>
        <BackButton href="/venues" color="inherit">
          <ArrowBackIos />
          <Typography variant="body2">back to results</Typography>
        </BackButton>
        <DetailedViewContainer>
          <VenueDetailsComponent venueDetails={venueDetails} />
          <VenueBookingComponent venueDetails={venueDetails} />
        </DetailedViewContainer>
      </Box>
    )
  );
};
