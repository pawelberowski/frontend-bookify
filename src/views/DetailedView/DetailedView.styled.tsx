import { Box, styled } from "@mui/material";

export const DetailedViewContainer = styled(Box)(
  ({ theme }) => `
  display: flex;
  justify-content: space-around;
  margin-top: ${theme.spacing(6)};
`,
);
