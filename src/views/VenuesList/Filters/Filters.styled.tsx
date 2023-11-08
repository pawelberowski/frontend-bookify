import {
  Accordion,
  AccordionSummary,
  Backdrop,
  Button,
  Paper,
  styled,
} from "@mui/material";
import headerImageUrl from "/src/shared/assets/gradient.svg";

export const FiltersContainer = styled(Paper)`
  width: 282px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};
  position: absolute;
  top: 0;
  left: 0;
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

export const FiltersButtonBackIn = styled(Button)(
  ({ theme }) => `
  position: absolute;
  left: 0;
  top: ${theme.spacing(18)};
  border-radius: 0 18px 18px 0;
  color: ${theme.palette.customGrey.contrastText};
  text-transform: none;
`,
);

export const StyledBackdrop = styled(Backdrop)`
  z-index: 1101;
`;
