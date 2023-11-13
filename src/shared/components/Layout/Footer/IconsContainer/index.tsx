import facebookIcon from "../../../../assets/facebook.svg";
import instagramIcon from "../../../../assets/instagram.svg";
import twitterIcon from "../../../../assets/tweeter.svg";
import emailIcon from "../../../../assets/mail.svg";
import { IconsContainerStyled } from "./IconsContainer.styled.tsx";

export const IconsContainer = () => {
  return (
    <IconsContainerStyled>
      <img src={facebookIcon} alt="facebook logo" />
      <img src={instagramIcon} alt="instagram logo" />
      <img src={twitterIcon} alt="twitter logo" />
      <img src={emailIcon} alt="envelope icon" />
    </IconsContainerStyled>
  );
};
