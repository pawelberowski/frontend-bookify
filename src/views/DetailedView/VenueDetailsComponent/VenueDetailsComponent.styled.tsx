import { Box, styled, Typography } from "@mui/material";

export const VenueDetailsContainer = styled(Box)(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  width: 55%;
  gap: ${theme.spacing(4)};
  ${theme.breakpoints.down("md")} {
    width: 92%;
  }
`,
);

export const NameAndScoreContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

export const AddressWrapper = styled(Typography)`
  font-weight: 400;
`;

export const ScoreContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ReviewsNumberWrapper = styled(Typography)`
  line-height: 150%;
  display: flex;
  justify-content: flex-end;
`;
