import { useVenueDetails } from "./useVenueDetails.tsx";
import { useParams } from "react-router-dom";
import {
  DetailedViewContainer,
  LabelDivider,
  VenueBookingContainer,
} from "./DetailedView.styled.tsx";

import { Box, Typography } from "@mui/material";
import { BookingSystem } from "./BookingSystem";
import { ContactList } from "./ContactList";
import { SocialMediaLinks } from "./SocialMediaLinks";
import { VenueDetailsComponent } from "./VenueDetailsComponent";
export const DetailedView = () => {
  const params = useParams();
  const venueId = Number(params.id);
  const { venueDetails } = useVenueDetails(venueId);

  return (
    venueDetails && (
      <DetailedViewContainer>
        <VenueDetailsComponent venueDetails={venueDetails} />
        <VenueBookingContainer>
          <Box>
            <Typography variant="h4">Book this venue</Typography>
            <LabelDivider />
            <BookingSystem priceInEur={venueDetails.pricePerNightInEUR} />
          </Box>
          <Box>
            <Typography variant="h4">Contact this venue</Typography>
            <LabelDivider />
            <ContactList
              phoneNumber={venueDetails.contactDetails.phone}
              email={venueDetails.contactDetails.email}
            />
          </Box>
          <Box>
            <Typography variant="h4">Check out on social media</Typography>
            <LabelDivider />
            <SocialMediaLinks />
          </Box>
        </VenueBookingContainer>
      </DetailedViewContainer>
    )
  );
};
