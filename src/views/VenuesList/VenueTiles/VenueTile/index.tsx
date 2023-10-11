import { Venue } from "../../../../shared/types/Venue.ts";
import { FC } from "react";
import { Box, CircularProgress, IconButton, Paper } from "@mui/material";
import {
  ArrowBackIos,
  ArrowForwardIos,
  FavoriteBorder,
} from "@mui/icons-material";
import GradeIcon from "@mui/icons-material/Grade";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { useVenueTile } from "./useVenueTile.tsx";

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
    <div>
      <Box
        sx={{
          backgroundImage: `url('${photos[activeStep].url}')`,
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
