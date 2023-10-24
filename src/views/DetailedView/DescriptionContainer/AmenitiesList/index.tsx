import { List, ListItem, ListItemIcon } from "@mui/material";
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
          {amenity}
        </ListItem>
      ))}
    </List>
  );
};
