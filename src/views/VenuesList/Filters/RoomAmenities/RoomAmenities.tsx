import {
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { StyledAccordion } from "../Filters.styled.tsx";
import { ExpandIcon } from "../ExpandIcon";

export const RoomAmenities = () => {
  const roomAmenities = [
    "kitchen facilities",
    "bathroom facilities",
    "hypoallergic bedding",
    "TV",
    "safe",
  ];

  return (
    <StyledAccordion elevation={0}>
      <AccordionSummary
        expandIcon={<ExpandIcon />}
        aria-controls="room-amenities-content"
        id="room-amenities-header"
      >
        <Typography variant="body2">room amenities</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">
          {roomAmenities.map((amenity) => (
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
