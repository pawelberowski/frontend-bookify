import { Box } from "@mui/material";
import { useVenuesList } from "./useVenuesList.tsx";

export const VenuesList = () => {
  const { venues } = useVenuesList();
  return <Box>{venues?.map((venue) => <p>{venue.name}</p>)}</Box>;
};
