import { List, ListItem } from "@mui/material";
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
        {`${venueDetails.sleepingDetails.maxCapacity} sleeping places - ${venueDetails.sleepingDetails.amountOfBeds} beds`}
      </ListItem>
      <ListItem>
        <BlackIcon>
          <AccessTime />
        </BlackIcon>
        <span>{`check-in ${venueDetails.checkInHour} / check-out ${venueDetails.checkOutHour}`}</span>
      </ListItem>
      <ListItem>
        <BlackIcon>
          <LocationCity />
        </BlackIcon>
        <span>{`${venueDetails.distanceFromCityCenterInKM} km to the city`}</span>
      </ListItem>
    </List>
  );
};
