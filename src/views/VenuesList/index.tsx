import { Box } from "@mui/material";
import { useVenuesList } from "./useVenuesList.tsx";
import {Filters} from "./Filters/Filters.tsx";


export const VenuesList = () => {
  const { venues } = useVenuesList();
  return <Box>
    <Filters />
    {venues?.map((venue) => <p>{venue.name}</p>)}
  </Box>;
};
