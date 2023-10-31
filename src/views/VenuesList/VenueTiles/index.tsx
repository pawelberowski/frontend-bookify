import { VenueTile } from "./VenueTile";
import { Venue } from "../../../shared/types/Venue.ts";
import { ChangeEvent, FunctionComponent } from "react";
import {
  PaginationWrapper,
  ShowAndSortContainer,
  SortButton,
  VenueTilesContainer,
  VenueTilesWrapper,
} from "./VenueTiles.styled.tsx";
import { Pagination, Typography } from "@mui/material";
import { SetURLSearchParams } from "react-router-dom";

interface VenueTiles {
  venues: Venue[];
  numberOfVenues: number | null;
  setSearchParams: SetURLSearchParams;
}

export const VenueTiles: FunctionComponent<VenueTiles> = ({
  venues,
  numberOfVenues,
  setSearchParams,
}) => {
  const pagesNumber = Math.ceil((numberOfVenues ?? 1) / 18);

  const changePage = (_event: ChangeEvent<unknown>, value: number) =>
    setSearchParams({ page: String(value) });

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
