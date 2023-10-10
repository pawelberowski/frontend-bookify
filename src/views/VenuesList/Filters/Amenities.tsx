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
  const amenities = ["placeholder1", "placeholder2", "placeholder3"];

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
          {amenities.map((amenity) => (
            <FormControlLabel key={amenity} control={<Checkbox />} label={amenity} />
          ))}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
