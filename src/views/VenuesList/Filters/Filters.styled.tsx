import { Accordion, Box, styled } from "@mui/material";

export const FiltersContainer = styled(Box)`
  width: 282px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};
`;

export const StyledAccordion = styled(Accordion)`
  &:before {
    display: none;
  }
`;
