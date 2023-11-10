import { List, ListItem, ListItemIcon, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { VenueDetails } from "../../../../../shared/types/VenueDetails.ts";
import BedIcon from "../../../../../shared/assets/bed.svg";
import ClockIcon from "../../../../../shared/assets/clock.svg";
import CityIcon from "../../../../../shared/assets/city.svg";

interface Props {
  venueDetails: VenueDetails;
}
export const StayingDetails: FunctionComponent<Props> = ({ venueDetails }) => {
  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <img src={BedIcon} alt="Bed" />
        </ListItemIcon>
        <Typography>
          {`${venueDetails.sleepingDetails.maxCapacity} sleeping places - ${venueDetails.sleepingDetails.amountOfBeds} beds`}
        </Typography>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <img src={ClockIcon} alt="Clock" />
        </ListItemIcon>
        <Typography>{`check-in ${venueDetails.checkInHour} / check-out ${venueDetails.checkOutHour}`}</Typography>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <img src={CityIcon} alt="City" />
        </ListItemIcon>
        <Typography>{`${venueDetails.distanceFromCityCenterInKM} km to the city`}</Typography>
      </ListItem>
    </List>
  );
};
