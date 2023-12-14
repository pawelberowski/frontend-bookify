import { CircularProgress } from "@mui/material";
import { useVenuesList } from "./useVenuesList.tsx";
import { Filters } from "./Filters";
import { VenueTiles } from "./VenueTiles";
import { VenuesListContainerStyled } from "./VenuesList.styled.tsx";

export const VenuesList = () => {
  const { venues, numberOfVenues, setSearchParams } = useVenuesList();

  return (
    <VenuesListContainerStyled>
      <Filters />
      {venues ? (
        <VenueTiles
          venues={venues}
          numberOfVenues={numberOfVenues}
          setSearchParams={setSearchParams}
        />
      ) : (
        <CircularProgress />
      )}
    </VenuesListContainerStyled>
  );
};
