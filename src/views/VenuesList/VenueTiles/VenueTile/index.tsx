import { Venue } from "../../../../shared/types/Venue.ts";
import { FunctionComponent } from "react";
import { CircularProgress, Typography } from "@mui/material";
import {
  ArrowBackIos,
  ArrowForwardIos,
  FavoriteBorder,
  Place,
} from "@mui/icons-material";
import GradeIcon from "@mui/icons-material/Grade";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { useVenueSlider } from "./useVenueSlider.tsx";
import {
  ArrowIcon,
  FavoriteContainer,
  LocationWrapper,
  NameContainer,
  PriceAndLocation,
  RatingAndCapacityContainer,
  RatingAndCapacityWrapper,
  RowContainer,
  SlidePhotosContainer,
  StyledLink,
  VenueTileContainer,
} from "./VenueTile.styled.tsx";
import { PricePerNight } from "./PricePerNight";

interface VenueTileProps {
  venue: Venue;
}

export const VenueTile: FunctionComponent<VenueTileProps> = ({ venue }) => {
  const { name, pricePerNightInEUR, location, rating, capacity, albumId } =
    venue;
  const { photos, activeStep, handleBack, handleNext } =
    useVenueSlider(albumId);

  if (!photos) {
    return <CircularProgress />;
  }

  return (
    <StyledLink to={String(venue.id)}>
      <VenueTileContainer>
        <SlidePhotosContainer imgUrl={photos[activeStep].url}>
          <RowContainer>
            <FavoriteContainer>
              <FavoriteBorder />
            </FavoriteContainer>
            <NameContainer>
              <Typography variant="h5">{name}</Typography>
            </NameContainer>
          </RowContainer>
          <RowContainer>
            <ArrowIcon onClick={handleBack}>
              <ArrowBackIos />
            </ArrowIcon>
            <ArrowIcon onClick={handleNext}>
              <ArrowForwardIos />
            </ArrowIcon>
          </RowContainer>
          <RowContainer>
            <PriceAndLocation>
              <PricePerNight priceInEur={pricePerNightInEUR} />
              <LocationWrapper>
                <Place />
                <Typography variant="caption">{location.name}</Typography>
              </LocationWrapper>
            </PriceAndLocation>
          </RowContainer>
        </SlidePhotosContainer>
        <RatingAndCapacityContainer>
          <RatingAndCapacityWrapper>
            <GradeIcon />
            <Typography variant="h6">rating</Typography>
            <Typography variant="h6">{rating}</Typography>
          </RatingAndCapacityWrapper>
          <RatingAndCapacityWrapper>
            <PeopleAltIcon />
            <Typography variant="h6">capacity</Typography>
            <Typography variant="h6">{capacity}</Typography>
          </RatingAndCapacityWrapper>
        </RatingAndCapacityContainer>
      </VenueTileContainer>
    </StyledLink>
  );
};
