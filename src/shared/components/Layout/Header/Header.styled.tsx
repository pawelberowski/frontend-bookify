import { AppBar, Box, Button, styled, Typography } from "@mui/material";

export const StyledAppBar = styled(AppBar)`
  height: ${({ theme }) => theme.variables.headerHeight}px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Logo = styled(Typography)`
  display: flex;
  align-items: center;
  font-size: 37px;
  font-weight: 100;
`;

export const LinksContainer = styled(Box)`
  display: flex;
`;

export const LowerCaseButton = styled(Button)`
  text-transform: lowercase;
`;

export const ShadowButton = styled(Button)`
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  text-transform: lowercase;
`;
