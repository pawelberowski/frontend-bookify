import { VenueTile } from "./VenueTile";
import { Box } from "@mui/material";
import { Venue } from "../../../shared/types/Venue.ts";
import { FC } from "react";

interface VenueTiles {
  venues: Venue[];
}
export const VenueTiles: FC<VenueTiles> = ({ venues }) => {
  return (
    <Box>
      {venues?.map((venue) => <VenueTile key={venue.id} venue={venue} />)}
    </Box>
  );
};
