import { LinksContainer, Logo, StyledAppBar } from "./Header.styled.tsx";
import { Button } from "@mui/material";

export const Header = () => {
  return (
    <StyledAppBar color="inherit">
      <Logo>BOOKIFY</Logo>
      <LinksContainer>
        <Button href="/about" color="inherit">
          about us
        </Button>
        <Button href="/favourites" color="inherit">
          your favourites
        </Button>
        <Button href="/hosting" color="inherit">
          start hosting
        </Button>
        <Button href="/login" color="primary">
          login
        </Button>
      </LinksContainer>
    </StyledAppBar>
  );
};
