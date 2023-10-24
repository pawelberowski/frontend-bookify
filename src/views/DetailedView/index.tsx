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
  NameWrapper,
  ReviewsNumberWrapper,
  RightPanelContainer,
  ScoreContainer,
  SocialMediaContainer,
} from "./DetailedView.styled.tsx";
import { useCurrentDisplay } from "./useCurrentDisplay.tsx";
import { DisplayContainer } from "./DisplayContainer";
import { PhotoSlider } from "./PhotoSlider";
import { Rating } from "@mui/material";

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
              <NameWrapper>{venueDetails.name}</NameWrapper>
              <AddressWrapper>{`${venueDetails.location.postalCode}, ${venueDetails.location.name}`}</AddressWrapper>
            </NameAndAddressContainer>
            <ScoreContainer>
              <ReviewsNumberWrapper>
                {venueDetails.numberOfReviews} reviews
              </ReviewsNumberWrapper>
              <Rating value={venueDetails.rating} precision={0.5} readOnly />
            </ScoreContainer>
          </NameAndScoreContainer>
          <PhotoSlider albumId={venueDetails.albumId} />
          <DisplaySwitchesContainer square elevation={2}>
            <DisplaySwitchWrapper variant="text" onClick={switchToDescription}>
              description
            </DisplaySwitchWrapper>
            <DisplaySwitchWrapper variant="text" onClick={switchToGallery}>
              gallery
            </DisplaySwitchWrapper>
            <DisplaySwitchWrapper variant="text" onClick={switchToMap}>
              map
            </DisplaySwitchWrapper>
          </DisplaySwitchesContainer>
          <DisplayContainer
            currentDisplay={currentDisplay}
            venueDetails={venueDetails}
          />
        </LeftPanelContainer>
        <RightPanelContainer>
          <BookingContainer>
            <LabelWrapper>Book this venue</LabelWrapper>
          </BookingContainer>
          <ContactContainer>
            <LabelWrapper>Contact this venue</LabelWrapper>
          </ContactContainer>
          <SocialMediaContainer>
            <LabelWrapper>Check out on social media</LabelWrapper>
          </SocialMediaContainer>
        </RightPanelContainer>
      </DetailedViewContainer>
    )
  );
};
