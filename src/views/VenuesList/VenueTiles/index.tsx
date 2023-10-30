import { VenueTile } from "./VenueTile";
import { Venue } from "../../../shared/types/Venue.ts";
import { FunctionComponent } from "react";
import { VenueTilesContainer } from "./VenueTiles.styled.tsx";
import { Button } from "@mui/material";

interface VenueTiles {
  venues: Venue[];
  onNextPage: () => void;
  onPrevPage: () => void;
}

export const VenueTiles: FunctionComponent<VenueTiles> = ({
  venues,
  onNextPage,
  onPrevPage,
}) => {
  return (
    <VenueTilesContainer>
      {venues?.map((venue) => <VenueTile key={venue.id} venue={venue} />)}
      <Button onClick={onPrevPage}>previous </Button>
      <Button onClick={onNextPage}>next</Button>
    </VenueTilesContainer>
  );
};
