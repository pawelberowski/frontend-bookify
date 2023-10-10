import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const HandicapAccessibility = () => {
  const handicapAccesibilities = [
    "wheelchair friendly",
    "blind friendly",
    "deaf friendly",
    "short-grown friendly",
  ];

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="handicap-accessibility-content"
        id="handicap-accessibility-header"
      >
        <Typography>handicap accessibility</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {handicapAccesibilities.map((accessibility) => (
            <FormControlLabel
              key={accessibility}
              control={<Checkbox />}
              label={accessibility}
            />
          ))}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
