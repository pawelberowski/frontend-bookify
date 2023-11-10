import { Box, Rating, Typography } from "@mui/material";
import { PhotoSlider } from "../PhotoSlider";
import { DisplaySwitches } from "../DisplaySwitches";
import { DisplayContainer } from "../DisplayContainer";
import { VenueDetails } from "../../../shared/types/VenueDetails.ts";
import { FunctionComponent } from "react";
import { useCurrentDisplay } from "../useCurrentDisplay.tsx";
import {
  AddressWrapper,
  NameAndScoreContainer,
  ReviewsNumberWrapper,
  ScoreContainer,
  VenueDetailsContainer,
} from "./VenueDetailsComponent.styled.tsx";

interface Props {
  venueDetails: VenueDetails;
}
export const VenueDetailsComponent: FunctionComponent<Props> = ({
  venueDetails,
}) => {
  const { currentDisplay, switchToDescription, switchToGallery, switchToMap } =
    useCurrentDisplay();
  return (
    <VenueDetailsContainer>
      <NameAndScoreContainer>
        <Box>
          <Typography variant="h3">{venueDetails.name}</Typography>
          <AddressWrapper variant="h4">{`${venueDetails.location.postalCode}, ${venueDetails.location.name}`}</AddressWrapper>
        </Box>
        <ScoreContainer>
          <ReviewsNumberWrapper variant="h6">
            {venueDetails.numberOfReviews} reviews
          </ReviewsNumberWrapper>
          <Rating value={venueDetails.rating} precision={0.5} readOnly />
        </ScoreContainer>
      </NameAndScoreContainer>
      <PhotoSlider albumId={venueDetails.albumId} />
      <DisplaySwitches
        switchToDescription={switchToDescription}
        switchToGallery={switchToGallery}
        switchToMap={switchToMap}
      />
      <DisplayContainer
        currentDisplay={currentDisplay}
        venueDetails={venueDetails}
      />
    </VenueDetailsContainer>
  );
};
