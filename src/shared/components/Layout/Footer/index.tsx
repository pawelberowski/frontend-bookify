import { Divider } from "@mui/material";
import { ContactLinks } from "./ContactLinks";
import { IconsContainer } from "./IconsContainer";
import { FooterStyled } from "./Footer.styled.tsx";
import { PhraseContainer } from "./PhraseContainer";
export const Footer = () => {
  return (
    <FooterStyled>
      <ContactLinks />
      <Divider flexItem={true} />
      <PhraseContainer />
      <IconsContainer />
    </FooterStyled>
  );
};
