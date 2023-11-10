import { Box, Divider, styled } from "@mui/material";

export const LabelDivider = styled(Divider)(
  ({ theme }) => `
  margin-top: 16px;
  margin-bottom: 40px;
  border-bottom-width: 2px;
  border-color: ${theme.palette.customGrey.darker};
`,
);

export const VenueBookingContainer = styled(Box)`
  max-width: 382px;
`;
