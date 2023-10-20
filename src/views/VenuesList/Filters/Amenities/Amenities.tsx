import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="amenities-content"
        id="amenities-header"
      >
        <Typography>amenities</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {generalAmenities.map((amenity) => (
            <FormControlLabel
              key={amenity}
              control={<Checkbox />}
              label={amenity}
            />
          ))}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
