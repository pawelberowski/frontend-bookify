import { VenueTile } from "./VenueTile";
import { Venue } from "../../../shared/types/Venue.ts";
import { ChangeEvent, FunctionComponent } from "react";
import { VenueTilesContainer } from "./VenueTiles.styled.tsx";
import { Pagination } from "@mui/material";
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
      {venues?.map((venue) => <VenueTile key={venue.id} venue={venue} />)}
      <Pagination count={pagesNumber} onChange={changePage} />
    </VenueTilesContainer>
  );
};
