import { ListItemIcon, Typography } from "@mui/material";
import PhoneIcon from "../../../shared/assets/phone.svg";
import MailIcon from "../../../shared/assets/mail.svg";
import { FunctionComponent } from "react";
import {
  EmailWrapper,
  StyledList,
  StyledListItem,
} from "./ContactList.styled.tsx";

interface ContactList {
  phoneNumber: string;
  email: string;
}
export const ContactList: FunctionComponent<ContactList> = ({
  phoneNumber,
  email,
}) => {
  return (
    <StyledList>
      <StyledListItem>
        <ListItemIcon>
          <img src={PhoneIcon} alt="phone" />
        </ListItemIcon>
        <Typography variant="body2">{phoneNumber}</Typography>
      </StyledListItem>
      <StyledListItem>
        <ListItemIcon>
          <img src={MailIcon} alt="email" />
        </ListItemIcon>
        <EmailWrapper variant="body2">{email}</EmailWrapper>
      </StyledListItem>
    </StyledList>
  );
};
