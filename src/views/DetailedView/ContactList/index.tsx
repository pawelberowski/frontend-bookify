import { List, ListItem, ListItemIcon, Typography } from "@mui/material";
import PhoneIcon from "../../../shared/assets/phone.svg";
import MailIcon from "../../../shared/assets/mail.svg";
import { FunctionComponent } from "react";

interface ContactList {
  phoneNumber: string;
  email: string;
}
export const ContactList: FunctionComponent<ContactList> = ({
  phoneNumber,
  email,
}) => {
  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <img src={PhoneIcon} alt="phone" />
        </ListItemIcon>
        <Typography variant="body2">{phoneNumber}</Typography>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <img src={MailIcon} alt="email" />
        </ListItemIcon>
        <Typography variant="body2">{email}</Typography>
      </ListItem>
    </List>
  );
};
