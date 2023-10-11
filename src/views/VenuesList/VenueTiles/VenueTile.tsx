import { Venue } from "../../../shared/types/Venue.ts";
import { FC, useState } from "react";
import { useVenuePhotos } from "./useVenuePhotos.tsx";
import { Box, IconButton, Paper } from "@mui/material";
import {
  ArrowBackIos,
  ArrowForwardIos,
  FavoriteBorder,
} from "@mui/icons-material";
import GradeIcon from "@mui/icons-material/Grade";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

interface VenueTileProps {
  venue: Venue;
}

export const VenueTile: FC<VenueTileProps> = ({ venue }) => {
  const { name, pricePerNightInEUR, location, rating, capacity, albumId } =
    venue;
  const photos = useVenuePhotos(albumId);

  const [activeStep, setActiveStep] = useState(0);
  // const maxSteps = photos?.length;

  const handleNext = () => {
    if (activeStep === photos?.length) {
      setActiveStep(0);
      return;
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    if (activeStep === 0) {
      setActiveStep(photos?.length ?? 0);
      return;
    }
    setActiveStep(activeStep - 1);
  };

  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url('${photos?.[activeStep].url}')`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <FavoriteBorder />
        <h2>{name}</h2>
        <IconButton onClick={handleBack}>
          <ArrowBackIos />
        </IconButton>
        <IconButton onClick={handleNext}>
          <ArrowForwardIos />
        </IconButton>
        <Box>
          <p>{pricePerNightInEUR}</p>
          <p>{location.name}</p>
        </Box>
        <Paper>
          <span>
            <GradeIcon />
            {rating}
            <PeopleAltIcon />
            {capacity}
          </span>
        </Paper>
      </Box>
    </div>
  );
};
