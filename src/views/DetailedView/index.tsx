import { useVenueDetails } from "./useVenueDetails.tsx";
import { useParams } from "react-router-dom";
import {
  AddressWrapper,
  BookingContainer,
  ContactContainer,
  DetailedViewContainer,
  DisplayContainer,
  DisplaySwitchesContainer,
  DisplaySwitchWrapper,
  LabelWrapper,
  LeftPanelContainer,
  NameAndAddressContainer,
  NameAndScoreContainer,
  NameWrapper,
  PhotoSliderContainer,
  RatingWrapper,
  ReviewsNumberWrapper,
  RightPanelContainer,
  ScoreContainer,
  SocialMediaContainer,
} from "./DetailedView.styled.tsx";

export const DetailedView = () => {
  const params = useParams();
  const venueId = Number(params.id);
  const { venueDetails } = useVenueDetails(venueId);

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
              <RatingWrapper>{venueDetails.rating}</RatingWrapper>
            </ScoreContainer>
          </NameAndScoreContainer>
          <PhotoSliderContainer>Placeholder</PhotoSliderContainer>
          <DisplaySwitchesContainer>
            <DisplaySwitchWrapper variant="text">
              description
            </DisplaySwitchWrapper>
            <DisplaySwitchWrapper variant="text">gallery</DisplaySwitchWrapper>
            <DisplaySwitchWrapper variant="text">map</DisplaySwitchWrapper>
          </DisplaySwitchesContainer>
          <DisplayContainer>{venueDetails.description}</DisplayContainer>
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
