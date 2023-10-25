import { useVenueDetails } from "./useVenueDetails.tsx";
import { useParams } from "react-router-dom";
import {
  AddressWrapper,
  BookingContainer,
  ContactContainer,
  DetailedViewContainer,
  DisplaySwitchesContainer,
  DisplaySwitchWrapper,
  LabelWrapper,
  LeftPanelContainer,
  NameAndAddressContainer,
  NameAndScoreContainer,
  ReviewsNumberWrapper,
  RightPanelContainer,
  ScoreContainer,
  SocialMediaContainer,
} from "./DetailedView.styled.tsx";
import { useCurrentDisplay } from "./useCurrentDisplay.tsx";
import { DisplayContainer } from "./DisplayContainer";
import { PhotoSlider } from "./PhotoSlider";
import { Rating, Typography } from "@mui/material";

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
          <BookingContainer>
            <LabelWrapper variant="h4">Book this venue</LabelWrapper>
          </BookingContainer>
          <ContactContainer>
            <LabelWrapper variant="h4">Contact this venue</LabelWrapper>
          </ContactContainer>
          <SocialMediaContainer>
            <LabelWrapper variant="h4">Check out on social media</LabelWrapper>
          </SocialMediaContainer>
        </RightPanelContainer>
      </DetailedViewContainer>
    )
  );
};
