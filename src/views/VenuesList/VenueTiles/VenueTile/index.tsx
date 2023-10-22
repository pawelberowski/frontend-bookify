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
  ArrowIcon,
  FavoriteContainer,
  LocationWrapper,
  NameContainer,
  Price,
  PriceAndLocation,
  RatingAndCapacityContainer,
  RatingAndCapacityWrapper,
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
          <ArrowIcon onClick={handleBack}>
            <ArrowBackIos />
          </ArrowIcon>
          <ArrowIcon onClick={handleNext}>
            <ArrowForwardIos />
          </ArrowIcon>
        </RowContainer>
        <RowContainer>
          <PriceAndLocation>
            <Price>{pricePerNightInEUR}</Price>
            <LocationWrapper>
              <Place />
              {location.name}
            </LocationWrapper>
          </PriceAndLocation>
        </RowContainer>
      </SlidePhotosContainer>
      <RatingAndCapacityContainer>
        <RatingAndCapacityWrapper>
          <GradeIcon />
          <p>rating</p>
          <p>{rating}</p>
        </RatingAndCapacityWrapper>
        <RatingAndCapacityWrapper>
          <PeopleAltIcon />
          <p>capacity</p>
          <p>{capacity}</p>
        </RatingAndCapacityWrapper>
      </RatingAndCapacityContainer>
    </VenueTileContainer>
  );
};
