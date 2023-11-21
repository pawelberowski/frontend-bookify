import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(
  ({ theme }) => `
  display: flex;
  gap: 55px;
  ${theme.breakpoints.down("md")} {
    justify-content: space-around;
    gap: 0;
    margin-bottom: ${theme.spacing(20)};
  }
`,
);
