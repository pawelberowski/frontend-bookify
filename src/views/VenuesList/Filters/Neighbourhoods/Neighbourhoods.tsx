import {
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { StyledAccordion } from "../Filters.styled.tsx";
import { ExpandIcon } from "../ExpandIcon";

export const Neighbourhoods = () => {
  const neighbourhoods = [
    "lake",
    "forest",
    "mountains",
    "sea",
    "national park",
    "park",
    "mall",
    "zoo",
    "church",
    "old town",
    "historical monument",
    "museum",
    "theatre",
    "cinema",
    "amusement park",
    "restaurant",
  ];

  return (
    <StyledAccordion elevation={0}>
      <AccordionSummary
        expandIcon={<ExpandIcon />}
        aria-controls="neighbourhoods-content"
        id="neighbourhoods-header"
      >
        <Typography variant="body2">neighbourhoods</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">
          {neighbourhoods.map((neighbourhood) => (
            <FormControlLabel
              key={neighbourhood}
              control={<Checkbox />}
              label={neighbourhood}
            />
          ))}
        </Typography>
      </AccordionDetails>
    </StyledAccordion>
  );
};
