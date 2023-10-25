import {
  LinksContainer,
  Logo,
  LowerCaseButton,
  ShadowButton,
  StyledAppBar,
} from "./Header.styled.tsx";

export const Header = () => {
  return (
    <StyledAppBar color="inherit">
      <Logo>BOOKIFY</Logo>
      <LinksContainer>
        <ShadowButton href="/about" color="inherit">
          about us
        </ShadowButton>
        <LowerCaseButton href="/favourites" color="inherit">
          your favourites
        </LowerCaseButton>
        <LowerCaseButton href="/hosting" color="inherit">
          start hosting
        </LowerCaseButton>
        <LowerCaseButton href="/login" color="primary">
          login
        </LowerCaseButton>
      </LinksContainer>
    </StyledAppBar>
  );
};
