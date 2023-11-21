import { Typography } from "@mui/material";
import { PhraseContainerStyled } from "./PhraseContainer.styled.tsx";

export const PhraseContainer = () => {
  return (
    <PhraseContainerStyled>
      <Typography variant="body2" textAlign="center">
        Feel free to contact us in case of any problems and doubts.
      </Typography>
      <Typography variant="body2" textAlign="center">
        We are here for you.
      </Typography>
    </PhraseContainerStyled>
  );
};
