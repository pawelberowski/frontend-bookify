import { Box, Button, Paper, styled } from "@mui/material";

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

export const NameWrapper = styled(Box)`
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 1.2px;
`;

export const AddressWrapper = styled(Box)`
  font-size: 25px;
  font-weight: 400;
  letter-spacing: 0.75px;
`;

export const ScoreContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ReviewsNumberWrapper = styled(Box)`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.42px;
  display: flex;
  justify-content: flex-end;
`;

export const DisplaySwitchesContainer = styled(Paper)`
  display: flex;
  justify-content: space-around;
`;

export const DisplaySwitchWrapper = styled(Button)`
  text-transform: lowercase;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.48px;
`;

export const RightPanelContainer = styled(Box)``;

export const BookingContainer = styled(Box)``;

export const ContactContainer = styled(Box)``;

export const SocialMediaContainer = styled(Box)``;

export const LabelWrapper = styled(Box)``;
