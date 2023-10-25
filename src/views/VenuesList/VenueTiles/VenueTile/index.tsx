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
  VenueTileContainer,
} from "./VenueTile.styled.tsx";
import { useNavigate } from "react-router-dom";

interface VenueTileProps {
  venue: Venue;
}

export const VenueTile: FunctionComponent<VenueTileProps> = ({ venue }) => {
  const { name, pricePerNightInEUR, location, rating, capacity, albumId } =
    venue;
  const { photos, activeStep, handleBack, handleNext } =
    useVenueSlider(albumId);

  const navigate = useNavigate();
  const handleClick = () => {
    console.log("clicked");
    const path = `/venues/${venue.id}`;
    navigate(path);
  };

  if (!photos) {
    return <CircularProgress />;
  }

  return (
    <VenueTileContainer onClick={handleClick}>
      <SlidePhotosContainer imgUrl={photos[activeStep].url}>
        <RowContainer>
          <FavoriteContainer>
            <FavoriteBorder />
          </FavoriteContainer>
          <NameContainer>
            <Typography variant="h4">{name}</Typography>
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
            <Typography variant="h4">{pricePerNightInEUR}</Typography>
            <LocationWrapper>
              <Place />
              <Typography variant="h6">{location.name}</Typography>
            </LocationWrapper>
          </PriceAndLocation>
        </RowContainer>
      </SlidePhotosContainer>
      <RatingAndCapacityContainer>
        <RatingAndCapacityWrapper>
          <GradeIcon />
          <Typography variant="h5">rating</Typography>
          <Typography variant="h5">{rating}</Typography>
        </RatingAndCapacityWrapper>
        <RatingAndCapacityWrapper>
          <PeopleAltIcon />
          <Typography variant="h5">capacity</Typography>
          <Typography variant="h5">{capacity}</Typography>
        </RatingAndCapacityWrapper>
      </RatingAndCapacityContainer>
    </VenueTileContainer>
  );
};
