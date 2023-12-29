import {
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { StyledAccordion } from "../Filters.styled.tsx";
import { ExpandIcon } from "../ExpandIcon";

export const HandicapAccessibility = () => {
  const handicapAccesibilities = [
    "wheelchair friendly",
    "blind friendly",
    "deaf friendly",
    "short-grown friendly",
  ];

  return (
    <StyledAccordion elevation={0}>
      <AccordionSummary
        expandIcon={<ExpandIcon />}
        aria-controls="handicap-accessibility-content"
        id="handicap-accessibility-header"
      >
        <Typography variant="body2">handicap accessibility</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">
          {handicapAccesibilities.map((accessibility) => (
            <FormControlLabel
              key={accessibility}
              control={<Checkbox />}
              label={accessibility}
            />
          ))}
        </Typography>
      </AccordionDetails>
    </StyledAccordion>
  );
};
