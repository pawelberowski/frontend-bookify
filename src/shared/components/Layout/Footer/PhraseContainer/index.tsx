import { Typography } from "@mui/material";
import { PhraseContainerStyled } from "./PhraseContainer.styled.tsx";

export const PhraseContainer = () => {
  return (
    <PhraseContainerStyled>
      <Typography variant="body2">
        Feel free to contact us in case of any problems and doubts.
      </Typography>
      <Typography variant="body2">We are here for you.</Typography>
    </PhraseContainerStyled>
  );
};
