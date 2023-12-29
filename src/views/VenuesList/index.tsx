import { CircularProgress } from "@mui/material";
import { Filters } from "./Filters";
import { VenueTiles } from "./VenueTiles";
import { VenuesListContainerStyled } from "./VenuesList.styled.tsx";
import { useVenueTiles } from "./VenueTiles/useVenueTiles.tsx";

export const VenuesList = () => {
  const { venues } = useVenueTiles();

  return (
    <VenuesListContainerStyled>
      <Filters />
      {venues ? <VenueTiles /> : <CircularProgress />}
    </VenuesListContainerStyled>
  );
};
