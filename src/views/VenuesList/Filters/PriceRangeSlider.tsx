import {Box, Slider} from "@mui/material";
import {useState} from "react";


function valuetext(value: number) {
  return `${value}€`;
}

export const PriceRangeSlider = () => {
  const [value, setValue] = useState<number[]>([0, 100]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue) ) {
      setValue(newValue);
    }
  };
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
      />
    </Box>
  )
}