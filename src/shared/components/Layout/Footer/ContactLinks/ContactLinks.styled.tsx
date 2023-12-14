import { Box, styled } from "@mui/material";

export const ContactLinksStyled = styled(Box)(
  ({ theme }) => `
  display: flex;
  justify-content: space-around;
  margin: 52px 0 52px 0;
  width: 600px;
  ${theme.breakpoints.down("md")} {
    width: 100%;
  }
`,
);
