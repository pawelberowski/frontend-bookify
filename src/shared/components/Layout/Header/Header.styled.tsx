import { AppBar, Box, styled } from "@mui/material";

export const StyledAppBar = styled(AppBar)`
  height: ${({ theme }) => theme.variables.headerHeight}px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Logo = styled(Box)`
  display: flex;
  align-items: center;
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: 250;
  line-height: normal;
`;
export const LinksContainer = styled(Box)`
  display: flex;
`;
