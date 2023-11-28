import {
  LinksContainer,
  Logo,
  LowerCaseButton,
  ShadowButton,
  StyledAppBar,
} from "./Header.styled.tsx";
import { Box, Typography } from "@mui/material";
import { useIsMobileView } from "../../../utils/useIsMobileView.tsx";
import HamburgerIcon from "../../../assets/hamburger.svg";
import { useUserContextValue } from "../../../UserContext/useUserContextValue.tsx";
export const Header = () => {
  const isMobileView = useIsMobileView();
  const { user } = useUserContextValue();

  return (
    <Box>
      {isMobileView ? (
        <StyledAppBar color="inherit">
          <img src={HamburgerIcon} alt="Three horizontal lines" />
          <Logo>BOOKIFY</Logo>
          <LinksContainer>
            {user ? (
              <LowerCaseButton href="/logout" color="primary">
                <Typography variant="subtitle1">{`${user.name} log out`}</Typography>
              </LowerCaseButton>
            ) : (
              <LowerCaseButton href="/login" color="primary">
                <Typography variant="subtitle1">login</Typography>
              </LowerCaseButton>
            )}
          </LinksContainer>
        </StyledAppBar>
      ) : (
        <StyledAppBar color="inherit">
          <Logo>BOOKIFY</Logo>
          <LinksContainer>
            <ShadowButton href="/about" color="inherit">
              <Typography variant="subtitle1">about us</Typography>
            </ShadowButton>
            <LowerCaseButton href="/favourites" color="inherit">
              <Typography variant="subtitle1">your favorites</Typography>
            </LowerCaseButton>
            <LowerCaseButton href="/hosting" color="inherit">
              <Typography variant="subtitle1">start hosting</Typography>
            </LowerCaseButton>
            {user ? (
              <LowerCaseButton href="/logout" color="primary">
                <Typography variant="subtitle1">{`${user.name} log out`}</Typography>
              </LowerCaseButton>
            ) : (
              <LowerCaseButton href="/login" color="primary">
                <Typography variant="subtitle1">login</Typography>
              </LowerCaseButton>
            )}
          </LinksContainer>
        </StyledAppBar>
      )}
    </Box>
  );
};
