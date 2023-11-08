import { Button, Paper, styled } from "@mui/material";

export const StyledPaper = styled(Paper)`
  width: 282px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};
  ${({ theme }) => theme.breakpoints.down("md")} {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const SortButton = styled(Button)(
  ({ theme }) => `
  position: absolute;
  left: -${theme.spacing(17.75)};
  top: ${theme.spacing(18)};
  border-radius: 18px 0 0 18px;
  color: ${theme.palette.customGrey.contrastText};
  text-transform: none;
`,
);
