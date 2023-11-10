import { Box, Button, styled } from "@mui/material";

export const DetailedViewContainer = styled(Box)(
  ({ theme }) => `
  display: flex;
  justify-content: space-around;
  margin-top: ${theme.spacing(6)};
`,
);

export const BackButton = styled(Button)(
  ({ theme }) => `
  gap: ${theme.spacing(2.5)};
  margin: ${theme.spacing(5)};
  text-transform: none;
`,
);
