import { Box, Button, styled } from "@mui/material";

export const FiltersBarContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledFiltersBar = styled(Box)`
  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
export const FilterWrapper = styled(Box)(
  ({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.palette.customGrey.contrastText};
    border-radius: 18px;
    box-shadow: 0 2px 4px 0 ${theme.palette.customGrey.lightest};
    border: 1px solid ${theme.palette.customGrey.lighter};
    width: 180px;
    height: 40px;
  `,
);

export const StyledInput = styled("input")`
  border: none;
  margin-left: ${({ theme }) => theme.spacing(2)};
  width: 100px;
`;

export const SpecificButton = styled(Button)`
  text-transform: none;
`;
