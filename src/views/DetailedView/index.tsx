import { useVenueDetails } from "./useVenueDetails.tsx";
import { useParams } from "react-router-dom";
import {
  AddressWrapper,
  DetailedViewContainer,
  DisplaySwitchesContainer,
  DisplaySwitchWrapper,
  LabelDivider,
  LeftPanelContainer,
  NameAndAddressContainer,
  NameAndScoreContainer,
  ReviewsNumberWrapper,
  RightPanelContainer,
  ScoreContainer,
} from "./DetailedView.styled.tsx";
import { useCurrentDisplay } from "./useCurrentDisplay.tsx";
import { DisplayContainer } from "./DisplayContainer";
import { PhotoSlider } from "./PhotoSlider";
import { Box, Rating, Typography } from "@mui/material";
import { BookingSystem } from "./BookingSystem";
import { ContactList } from "./ContactList";
import { SocialMediaLinks } from "./SocialMediaLinks";
export const DetailedView = () => {
  const params = useParams();
  const venueId = Number(params.id);
  const { venueDetails } = useVenueDetails(venueId);
  const { currentDisplay, switchToDescription, switchToGallery, switchToMap } =
    useCurrentDisplay();

  return (
    venueDetails && (
      <DetailedViewContainer>
        <LeftPanelContainer>
          <NameAndScoreContainer>
            <NameAndAddressContainer>
              <Typography variant="h3">{venueDetails.name}</Typography>
              <AddressWrapper variant="h4">{`${venueDetails.location.postalCode}, ${venueDetails.location.name}`}</AddressWrapper>
            </NameAndAddressContainer>
            <ScoreContainer>
              <ReviewsNumberWrapper variant="h6">
                {venueDetails.numberOfReviews} reviews
              </ReviewsNumberWrapper>
              <Rating value={venueDetails.rating} precision={0.5} readOnly />
            </ScoreContainer>
          </NameAndScoreContainer>
          <PhotoSlider albumId={venueDetails.albumId} />
          <DisplaySwitchesContainer square elevation={2}>
            <DisplaySwitchWrapper variant="text" onClick={switchToDescription}>
              <Typography variant="h5">description</Typography>
            </DisplaySwitchWrapper>
            <DisplaySwitchWrapper variant="text" onClick={switchToGallery}>
              <Typography variant="h5">gallery</Typography>
            </DisplaySwitchWrapper>
            <DisplaySwitchWrapper variant="text" onClick={switchToMap}>
              <Typography variant="h5">map</Typography>
            </DisplaySwitchWrapper>
          </DisplaySwitchesContainer>
          <DisplayContainer
            currentDisplay={currentDisplay}
            venueDetails={venueDetails}
          />
        </LeftPanelContainer>
        <RightPanelContainer>
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
        </RightPanelContainer>
      </DetailedViewContainer>
    )
  );
};
