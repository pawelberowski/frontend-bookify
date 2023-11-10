import { useVenueSlider } from "../../../VenuesList/VenueTiles/VenueTile/useVenueSlider.tsx";
import { CircularProgress } from "@mui/material";
import {
  ArrowBackIos,
  ArrowForwardIos,
  FavoriteBorder,
} from "@mui/icons-material";
import {
  ArrowIconWrapper,
  FavouriteIconContainer,
  FavouriteIconWrapper,
  PhotoSliderContainer,
  RowContainer,
} from "./PhotoSlider.styled.tsx";
import { FunctionComponent } from "react";

interface Props {
  albumId: number;
}

export const PhotoSlider: FunctionComponent<Props> = ({ albumId }) => {
  const { photos, activeStep, handleBack, handleNext } =
    useVenueSlider(albumId);

  if (!photos) {
    return <CircularProgress />;
  }

  return (
    <PhotoSliderContainer imgUrl={photos[activeStep].url}>
      <FavouriteIconContainer>
        <FavouriteIconWrapper color="customGrey">
          <FavoriteBorder />
        </FavouriteIconWrapper>
      </FavouriteIconContainer>
      <RowContainer>
        <ArrowIconWrapper onClick={handleBack}>
          <ArrowBackIos />
        </ArrowIconWrapper>
        <ArrowIconWrapper onClick={handleNext}>
          <ArrowForwardIos />
        </ArrowIconWrapper>
      </RowContainer>
      <RowContainer />
    </PhotoSliderContainer>
  );
};
