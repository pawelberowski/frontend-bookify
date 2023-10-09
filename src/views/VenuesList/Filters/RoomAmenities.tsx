import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const RoomAmenities = () => {
  const amenities = ["placeholder1", "placeholder2", "placeholder3"];

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="room-amenities-content"
        id="room-amenities-header"
      >
        <Typography>room amenities</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {amenities.map((amenity) => (
            <FormControlLabel control={<Checkbox />} label={amenity} />
          ))}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
