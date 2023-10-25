import { List, ListItem, ListItemIcon, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { Done } from "@mui/icons-material";

interface Props {
  amenities: string[];
}

export const AmenitiesList: FunctionComponent<Props> = ({ amenities }) => {
  return (
    <List>
      {amenities?.map((amenity) => (
        <ListItem key={amenity}>
          <ListItemIcon>
            <Done />
          </ListItemIcon>
          <Typography>{amenity}</Typography>
        </ListItem>
      ))}
    </List>
  );
};
