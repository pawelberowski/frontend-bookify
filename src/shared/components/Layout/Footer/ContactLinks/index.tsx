import { Typography } from "@mui/material";
import { ContactLinksStyled } from "./ContactLinks.styled.tsx";

export const ContactLinks = () => {
  return (
    <ContactLinksStyled>
      <Typography variant="body2">contact</Typography>
      <Typography variant="body2">assistance</Typography>
      <Typography variant="body2">about us</Typography>
    </ContactLinksStyled>
  );
};
