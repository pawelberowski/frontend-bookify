import { AccordionDetails, Slider, Typography } from "@mui/material";
import { useState } from "react";
import { StyledAccordion, StyledAccordionSummary } from "../Filters.styled.tsx";
import { ExpandIcon } from "../ExpandIcon";

export const PriceRange = () => {
  const [value, setValue] = useState<number[]>([0, 100]);
  const handleChange = (_event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setValue(newValue);
    }
  };
  return (
    <StyledAccordion elevation={0}>
      <StyledAccordionSummary
        expandIcon={<ExpandIcon />}
        aria-controls="price-range-content"
        id="price-range-header"
      >
        <Typography variant="body2">price range</Typography>
      </StyledAccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">
          <Slider
            getAriaLabel={() => "Price range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="on"
          />
        </Typography>
      </AccordionDetails>
    </StyledAccordion>
  );
};
