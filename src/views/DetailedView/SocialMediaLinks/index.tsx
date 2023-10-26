import { IconButton } from "@mui/material";
import FacebookIcon from "../../../shared/assets/facebook.svg";
import InstagramIcon from "../../../shared/assets/instagram.svg";
import TweeterIcon from "../../../shared/assets/tweeter.svg";
import WebIcon from "../../../shared/assets/web.svg";
import { Wrapper } from "./SocialMediaLinks.styled.tsx";
export const SocialMediaLinks = () => {
  return (
    <Wrapper>
      <IconButton
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={FacebookIcon} alt="facebook logo" />
      </IconButton>
      <IconButton
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={InstagramIcon} alt="instagram logo" />
      </IconButton>
      <IconButton
        href="https://tweeter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={TweeterIcon} alt="tweeter logo" />
      </IconButton>
      <IconButton
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={WebIcon} alt="web logo" />
      </IconButton>
    </Wrapper>
  );
};
