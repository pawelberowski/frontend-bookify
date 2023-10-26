import { Divider, Paper, styled } from "@mui/material";

export const DescriptionPaper = styled(Paper)(
  ({ theme }) => `
  padding: ${theme.spacing(10)};
  font-weight: 300;
  line-height: 219%;
  letter-spacing: 0.6px;
  `,
);

export const DescriptionDivider = styled(Divider)(
  ({ theme }) => `
  margin-top: ${theme.spacing(5)};
  margin-bottom: ${theme.spacing(5)};
  border-bottom-width: 2px;
`,
);
