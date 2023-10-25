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

export const LinksContainer = styled(Box)(
  ({ theme }) => `
  display: flex;
  color: ${theme.palette.customGrey.darker};
`,
);

export const LowerCaseButton = styled(Button)`
  text-transform: lowercase;
`;

export const ShadowButton = styled(Button)(
  ({ theme }) => `
  color: ${theme.palette.customGrey.darker};
  text-shadow: 0 4px 4px ${theme.palette.customGrey.lightest};
  text-transform: lowercase;
`,
);
