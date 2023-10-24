import { List, ListItem, ListItemIcon } from "@mui/material";
import { AccessTime, Bed, LocationCity } from "@mui/icons-material";
import { FunctionComponent } from "react";
import { VenueDetails } from "../../../../shared/types/VenueDetails.ts";

interface Props {
  venueDetails: VenueDetails;
}
export const StayingDetails: FunctionComponent<Props> = ({ venueDetails }) => {
  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <Bed style={{ color: "black" }} />
        </ListItemIcon>
        {`${venueDetails.sleepingDetails.maxCapacity} sleeping places - ${venueDetails.sleepingDetails.amountOfBeds} beds`}
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <AccessTime style={{ color: "black" }} />
        </ListItemIcon>
        {`check-in ${venueDetails.checkInHour} / check-out ${venueDetails.checkOutHour}`}
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <LocationCity style={{ color: "black" }} />
        </ListItemIcon>
        {`${venueDetails.distanceFromCityCenterInKM} km to the city`}
      </ListItem>
    </List>
  );
};
