import { Box, styled } from "@mui/material";

export const VenuesListContainerStyled = styled(Box)(
  ({ theme }) => `
  display: flex;
  padding: ${theme.spacing(10)};
  gap: ${theme.spacing(6)};
  ${theme.breakpoints.down("md")} {
    gap: 0;
  }
  `,
);
