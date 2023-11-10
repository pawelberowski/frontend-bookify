import { Box, Typography } from "@mui/material";
import { BookingSystem } from "./BookingSystem";
import { ContactList } from "./ContactList";
import { SocialMediaLinks } from "./SocialMediaLinks";
import { VenueDetails } from "../../../shared/types/VenueDetails.ts";
import { FunctionComponent } from "react";
import {
  LabelDivider,
  VenueBookingContainer,
} from "./VenueBookingComponent.styled.tsx";

interface Props {
  venueDetails: VenueDetails;
}
export const VenueBookingComponent: FunctionComponent<Props> = ({
  venueDetails,
}) => {
  return (
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
  );
};
