import {
  LinksContainer,
  Logo,
  LowerCaseButton,
  ShadowButton,
  StyledAppBar,
} from "./Header.styled.tsx";
import { Typography } from "@mui/material";

export const Header = () => {
  return (
    <StyledAppBar color="inherit">
      <Logo>BOOKIFY</Logo>
      <LinksContainer>
        <ShadowButton href="/about" color="inherit">
          <Typography variant="subtitle1">new</Typography>
        </ShadowButton>
        <LowerCaseButton href="/favourites" color="inherit">
          <Typography variant="subtitle1">your favorites</Typography>
        </LowerCaseButton>
        <LowerCaseButton href="/hosting" color="inherit">
          <Typography variant="subtitle1">start hosting</Typography>
        </LowerCaseButton>
        <LowerCaseButton href="/login" color="primary">
          <Typography variant="subtitle1">login</Typography>
        </LowerCaseButton>
      </LinksContainer>
    </StyledAppBar>
  );
};
