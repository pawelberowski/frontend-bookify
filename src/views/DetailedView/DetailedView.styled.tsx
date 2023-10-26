import { Box, Button, Divider, Paper, styled, Typography } from "@mui/material";

export const DetailedViewContainer = styled(Box)(
  ({ theme }) => `
  display: flex;
  justify-content: space-around;
  margin-top: ${theme.spacing(6)};
`,
);

export const LeftPanelContainer = styled(Box)(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(4)};
  max-width: 55%;
`,
);

export const NameAndScoreContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
`;
export const NameAndAddressContainer = styled(Box)``;

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

export const DisplaySwitchesContainer = styled(Paper)`
  display: flex;
  justify-content: space-around;
`;

export const DisplaySwitchWrapper = styled(Button)`
  text-transform: lowercase;
  line-height: 150%;
`;

export const LabelDivider = styled(Divider)(
  ({ theme }) => `
  margin-top: 16px;
  margin-bottom: 40px;
  border-bottom-width: 2px;
  border-color: ${theme.palette.customGrey.darker};
`,
);
