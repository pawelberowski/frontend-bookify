import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Slider,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const PriceRange = () => {
  const [value, setValue] = useState<number[]>([0, 100]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setValue(newValue);
    }
  };
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="price-range-content"
        id="price-range-header"
      >
        <Typography>price range</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <Slider
            getAriaLabel={() => "Price range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="on"
          />
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
