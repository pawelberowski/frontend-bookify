import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="neighbourhoods-content"
        id="neighbourhoods-header"
      >
        <Typography>neighbourhoods</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {neighbourhoods.map((neighbourhood) => (
            <FormControlLabel
              key={neighbourhood}
              control={<Checkbox />}
              label={neighbourhood}
            />
          ))}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
