import {
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { StyledAccordion, StyledAccordionSummary } from "../Filters.styled.tsx";
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
      <StyledAccordionSummary
        expandIcon={<ExpandIcon />}
        aria-controls="neighbourhoods-content"
        id="neighbourhoods-header"
      >
        <Typography variant="body2">neighbourhoods</Typography>
      </StyledAccordionSummary>
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
