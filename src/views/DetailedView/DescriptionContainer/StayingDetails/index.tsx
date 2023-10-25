import { List, ListItem, Typography } from "@mui/material";
import { AccessTime, Bed, LocationCity } from "@mui/icons-material";
import { FunctionComponent } from "react";
import { VenueDetails } from "../../../../shared/types/VenueDetails.ts";
import { BlackIcon } from "./StayingDetails.styled.tsx";

interface Props {
  venueDetails: VenueDetails;
}
export const StayingDetails: FunctionComponent<Props> = ({ venueDetails }) => {
  return (
    <List>
      <ListItem>
        <BlackIcon>
          <Bed />
        </BlackIcon>
        <Typography>
          {`${venueDetails.sleepingDetails.maxCapacity} sleeping places - ${venueDetails.sleepingDetails.amountOfBeds} beds`}
        </Typography>
      </ListItem>
      <ListItem>
        <BlackIcon>
          <AccessTime />
        </BlackIcon>
        <Typography>{`check-in ${venueDetails.checkInHour} / check-out ${venueDetails.checkOutHour}`}</Typography>
      </ListItem>
      <ListItem>
        <BlackIcon>
          <LocationCity />
        </BlackIcon>
        <Typography>{`${venueDetails.distanceFromCityCenterInKM} km to the city`}</Typography>
      </ListItem>
    </List>
  );
};
