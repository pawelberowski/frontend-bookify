import {
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { StyledAccordion } from "../Filters.styled.tsx";
import { ExpandIcon } from "../ExpandIcon";

export const Amenities = () => {
  const generalAmenities = [
    "fireplace",
    "speakers",
    "WiFi",
    "restaurant",
    "bar",
    "pool",
    "jacuzzi",
    "garden",
    "fitness center",
    "24h reception",
    "karaoke",
    "outdoor music",
    "indoor music",
    "library",
    "pet friendly",
    "playground",
    "parking",
  ];

  return (
    <StyledAccordion elevation={0}>
      <AccordionSummary
        expandIcon={<ExpandIcon />}
        aria-controls="amenities-content"
        id="amenities-header"
      >
        <Typography variant="body2">amenities</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">
          {generalAmenities.map((amenity) => (
            <FormControlLabel
              key={amenity}
              control={<Checkbox />}
              label={amenity}
            />
          ))}
        </Typography>
      </AccordionDetails>
    </StyledAccordion>
  );
};
