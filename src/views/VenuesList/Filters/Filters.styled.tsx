import {Accordion, AccordionSummary, Button, Paper, styled} from "@mui/material";
import headerImageUrl from "/src/shared/assets/gradient.svg";

export const FiltersContainer = styled(Paper)`
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

export const StyledAccordionSummary = styled(AccordionSummary)`
  &:hover {
    background-image: url(${headerImageUrl});
  }
  &:focus {
    background-image: url(${headerImageUrl});
  }
`

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
