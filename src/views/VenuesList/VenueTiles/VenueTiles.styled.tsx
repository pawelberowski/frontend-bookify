import { Box, styled } from "@mui/material";

export const VenueTilesContainer = styled(Box)(
  ({ theme }) => `
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing(2)};
`,
);
