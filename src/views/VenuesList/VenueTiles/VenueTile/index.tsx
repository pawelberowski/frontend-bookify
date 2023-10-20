import { Venue } from "../../../../shared/types/Venue.ts";
import { FunctionComponent } from "react";
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
  Capacity,
  FavoriteContainer,
  LeftArrowIcon,
  Location,
  NameContainer,
  Price,
  PriceAndLocation,
  Rating,
  RatingAndCapacity,
  RightArrowIcon,
  RowContainer,
  SlidePhotosContainer,
  VenueTileContainer,
} from "./VenueTile.styled.tsx";

interface VenueTileProps {
  venue: Venue;
}

export const VenueTile: FunctionComponent<VenueTileProps> = ({ venue }) => {
  const { name, pricePerNightInEUR, location, rating, capacity } = venue;
  const { photos, activeStep, handleBack, handleNext } = useVenueTile(venue);

  if (!photos) {
    return <CircularProgress />;
  }

  return (
    <VenueTileContainer>
      <SlidePhotosContainer imgUrl={photos[activeStep].url}>
        <RowContainer>
          <FavoriteContainer>
            <FavoriteBorder />
          </FavoriteContainer>
          <NameContainer>{name}</NameContainer>
        </RowContainer>
        <RowContainer>
          <LeftArrowIcon onClick={handleBack}>
            <ArrowBackIos />
          </LeftArrowIcon>
          <RightArrowIcon onClick={handleNext}>
            <ArrowForwardIos />
          </RightArrowIcon>
        </RowContainer>
        <RowContainer>
          <PriceAndLocation>
            <Price>{pricePerNightInEUR}</Price>
            <Location>
              <Place />
              {location.name}
            </Location>
          </PriceAndLocation>
        </RowContainer>
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
