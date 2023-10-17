import { Venue } from "../../../../shared/types/Venue.ts";
import { FC } from "react";
import { CircularProgress } from "@mui/material";
import {
  ArrowBackIos,
  ArrowForwardIos,
  FavoriteBorder,
  Place,
} from "@mui/icons-material";
import GradeIcon from "@mui/icons-material/Grade";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { useVenueTile } from "./useVenueTile.tsx";
import {
  ArrowsContainer,
  Capacity,
  FavoriteContainer,
  FavouriteAndNameContainer,
  LeftArrowIcon,
  Location,
  NameContainer,
  Price,
  PriceAndLocation,
  PriceAndLocationContainer,
  Rating,
  RatingAndCapacity,
  RightArrowIcon,
  SlidePhotosContainer,
  VenueTileContainer,
} from "./VenueTile.styled.tsx";

interface VenueTileProps {
  venue: Venue;
}

export const VenueTile: FC<VenueTileProps> = ({ venue }) => {
  const { name, pricePerNightInEUR, location, rating, capacity } = venue;
  const { photos, activeStep, handleBack, handleNext } = useVenueTile(venue);

  if (!photos) {
    return <CircularProgress />;
  }

  return (
    <VenueTileContainer>
      <SlidePhotosContainer imgUrl={photos[activeStep].url}>
        <FavouriteAndNameContainer>
          <FavoriteContainer>
            <FavoriteBorder />
          </FavoriteContainer>
          <NameContainer>{name}</NameContainer>
        </FavouriteAndNameContainer>
        <ArrowsContainer>
          <LeftArrowIcon onClick={handleBack}>
            <ArrowBackIos />
          </LeftArrowIcon>
          <RightArrowIcon onClick={handleNext}>
            <ArrowForwardIos />
          </RightArrowIcon>
        </ArrowsContainer>
        <PriceAndLocationContainer>
          <PriceAndLocation>
            <Price>{pricePerNightInEUR}</Price>
            <Location>
              <Place />
              {location.name}
            </Location>
          </PriceAndLocation>
        </PriceAndLocationContainer>
      </SlidePhotosContainer>
      <RatingAndCapacity>
        <Rating>
          <GradeIcon />
          rating {rating}
        </Rating>
        <Capacity>
          <PeopleAltIcon />
          capacity {capacity}
        </Capacity>
      </RatingAndCapacity>
    </VenueTileContainer>
  );
};
