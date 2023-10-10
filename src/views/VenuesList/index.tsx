import { Box } from "@mui/material";
import { useVenuesList } from "./useVenuesList.tsx";
import { Filters } from "./Filters/Filters.tsx";
import { VenueTile } from "./VenueTiles/VenueTile.tsx";

export const VenuesList = () => {
  const { venues } = useVenuesList();

  return (
    <Box>
      <Filters />
      <Box>
        {venues?.map((venue) => <VenueTile key={venue.id} venue={venue} />)}
      </Box>
    </Box>
  );
};
