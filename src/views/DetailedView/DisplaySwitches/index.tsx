import { Typography } from "@mui/material";
import {
  DisplaySwitchesContainer,
  DisplaySwitchWrapper,
} from "./DisplaySwitches.styled.tsx";
import { FunctionComponent } from "react";

interface Props {
  switchToDescription: () => void;
  switchToGallery: () => void;
  switchToMap: () => void;
}

export const DisplaySwitches: FunctionComponent<Props> = ({
  switchToDescription,
  switchToGallery,
  switchToMap,
}) => {
  return (
    <DisplaySwitchesContainer square elevation={2}>
      <DisplaySwitchWrapper variant="text" onClick={switchToDescription}>
        <Typography variant="h5">description</Typography>
      </DisplaySwitchWrapper>
      <DisplaySwitchWrapper variant="text" onClick={switchToGallery}>
        <Typography variant="h5">gallery</Typography>
      </DisplaySwitchWrapper>
      <DisplaySwitchWrapper variant="text" onClick={switchToMap}>
        <Typography variant="h5">map</Typography>
      </DisplaySwitchWrapper>
    </DisplaySwitchesContainer>
  );
};
