import { Box, styled } from "@mui/material";

export const IconsContainerStyled = styled(Box)(
  ({ theme }) => `
  display: flex;
  justify-content: space-between;
  width: 600px;
  margin: 52px 0 52px 0;
  ${theme.breakpoints.down("md")} {
  justify-content: space-around;
  width: 100%;
  }
`,
);
