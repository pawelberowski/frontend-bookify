import { Box, Button } from "@mui/material";
import { SearchMachine } from "./SearchMachine";

export const Frame = () => {
  return (
    <Box>
      <h2>Find your place and experience it together</h2>
      <SearchMachine />
      <Button>Search for venue</Button>
    </Box>
  );
};
