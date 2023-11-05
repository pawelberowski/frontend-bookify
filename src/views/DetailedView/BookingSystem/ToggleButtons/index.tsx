import { Typography } from "@mui/material";
import {
  LeftToggleButton,
  RightToggleButton,
  StyledButtonGroup,
} from "./toggleButtons.styled.tsx";
import { DatesValues } from "../useCalendarDates.tsx";
import { FunctionComponent } from "react";

interface Props {
  value: DatesValues;
}

export const ToggleButtons: FunctionComponent<Props> = ({ value }) => {
  if (!value) {
    return null;
  }

  const getDateString = (date: Date | null) => {
    return `${date?.getDate()}.${
      (date?.getMonth() ?? 0) + 1
    }.${date?.getFullYear()}`;
  };

  if (Array.isArray(value)) {
    const [startDate, endDate] = [value[0], value[1]];
    const startsAt = getDateString(startDate);
    const endsAt = getDateString(endDate);
    return (
      <StyledButtonGroup>
        <LeftToggleButton value="starts">
          <Typography variant="h5">{`starts at: ${startsAt}`}</Typography>
        </LeftToggleButton>
        <RightToggleButton value="ends">
          <Typography variant="h5">{`ends at: ${endsAt}`} </Typography>
        </RightToggleButton>
      </StyledButtonGroup>
    );
  }
};
