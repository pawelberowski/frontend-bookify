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
  const accessibilities = ["placeholder1", "placeholder2", "placeholder3"];

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
          {accessibilities.map((accessibility) => (
            <FormControlLabel key={accessibility} control={<Checkbox />} label={accessibility} />
          ))}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
