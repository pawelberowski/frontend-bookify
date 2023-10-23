import { Box, Button, Paper, styled } from "@mui/material";

export const DetailedViewContainer = styled(Box)`
  display: flex;
  justify-content: space-around;
  font-family: Poppins, sans-serif;
  margin-top: 24px;
`;

export const LeftPanelContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 60%;
`;

export const NameAndScoreContainer = styled(Box)`
  display: flex;
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

export const ScoreContainer = styled(Box)``;

export const ReviewsNumberWrapper = styled(Box)`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.42px;
`;

export const RatingWrapper = styled(Box)``;

export const DisplaySwitchesContainer = styled(Paper)`
  display: flex;
  justify-content: space-around;
  border-radius: 0;
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
