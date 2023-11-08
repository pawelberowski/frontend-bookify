import { Accordion, Box, Button, styled } from "@mui/material";

export const FiltersContainer = styled(Box)`
  width: 282px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};
  position: relative;
`;

export const StyledAccordion = styled(Accordion)`
  &:before {
    display: none;
  }
`;

export const FiltersButton = styled(Button)(
  ({ theme }) => `
  position: absolute;
  right: -${theme.spacing(17.75)};
  top: ${theme.spacing(18)};
  border-radius: 0 18px 18px 0;
  color: ${theme.palette.customGrey.contrastText};
  text-transform: none;
`,
);
