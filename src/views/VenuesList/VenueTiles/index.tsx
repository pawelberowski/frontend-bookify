import { VenueTile } from "./VenueTile";
import { Venue } from "../../../shared/types/Venue.ts";
import { FunctionComponent } from "react";
import { VenueTilesContainer } from "./VenueTiles.styled.tsx";

interface VenueTiles {
  venues: Venue[];
}
export const VenueTiles: FunctionComponent<VenueTiles> = ({ venues }) => {
  return (
    <VenueTilesContainer>
      {venues?.map((venue) => <VenueTile key={venue.id} venue={venue} />)}
    </VenueTilesContainer>
  );
};
