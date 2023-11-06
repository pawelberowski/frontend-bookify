import { Box, Button, styled } from "@mui/material";

export const FiltersBarContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledFiltersBar = styled(Box)`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
export const FilterWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 18px;
  width: 160px;
  height: 40px;
`;

export const StyledInput = styled("input")`
  border: none;
  width: 100px;
`;

export const SpecificButton = styled(Button)`
  text-transform: none;
`;
