import { VenueTile } from "./VenueTile";
import {
  PaginationWrapper,
  ShowAndSortContainer,
  SortButton,
  VenueTilesContainer,
  VenueTilesWrapper,
} from "./VenueTiles.styled.tsx";
import { Pagination, Typography } from "@mui/material";
import { useVenueTiles } from "./useVenueTiles.tsx";

export const VenueTiles = () => {
  const { venues, pagesNumber, changePage } = useVenueTiles();

  return (
    <VenueTilesContainer>
      <ShowAndSortContainer>
        <Typography variant="body2">show 18 on the page</Typography>
        <SortButton variant="text">
          <Typography variant="h5">sort</Typography>
        </SortButton>
      </ShowAndSortContainer>
      <VenueTilesWrapper>
        {venues?.map((venue) => <VenueTile key={venue.id} venue={venue} />)}
      </VenueTilesWrapper>
      <PaginationWrapper>
        <Pagination color="primary" count={pagesNumber} onChange={changePage} />
      </PaginationWrapper>
    </VenueTilesContainer>
  );
};
