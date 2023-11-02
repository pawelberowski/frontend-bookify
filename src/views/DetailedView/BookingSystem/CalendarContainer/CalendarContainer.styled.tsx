import Calendar from "react-calendar";
import { Box, styled } from "@mui/material";
import calendarArrow from "../../../../shared/assets/calendar-arrow.svg";
import calendarDoubleArrow from "../../../../shared/assets/calendar-double-arrow.svg";

export const CalendarWrapper = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const StyledCalendar = styled(Calendar)(
  ({ theme }) => `
  width: auto;
  border: 1px solid rgba(0, 0, 0, 0.10);
  border-radius: 18px;
  font-family: ${theme.typography.fontFamily};
  background: #FDFDFD;
  padding: ${theme.spacing(6)} ${theme.spacing(3)} ${theme.spacing(
    11,
  )} ${theme.spacing(3)};
  
  abbr {
    text-decoration: none;
  }
  
  .button {
    font-family: ${theme.typography.fontFamily};
    }
    
  .react-calendar__navigation__label__labelText {
    font-family: ${theme.typography.fontFamily};
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.6px;
    color: ${theme.palette.customGrey.main};
    }
    
  .react-calendar__month-view__weekdays__weekday {
    width: 48px;
    height: 48px;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.48px;
    color: ${theme.palette.customGrey.main};
    padding: ${theme.spacing(2)};
  }
  
  .react-calendar__month-view__days__day {
    width: 48px;
    height: 48px;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.48px;
    color: ${theme.palette.customGrey.main};
    padding: ${theme.spacing(2)};
  }
  
  .react-calendar__month-view__days__day--neighboringMonth {
    color: rgba(0, 0, 0, 0.39);
  }
  
  .react-calendar__navigation__next-button {
  background-image: url(${calendarArrow});
  background-position: center;
  }
  
  .react-calendar__navigation__next2-button {
  background-image: url(${calendarDoubleArrow});
  background-position: center;
  }
  
  .react-calendar__navigation__prev-button {
  background-image: url(${calendarArrow});
  rotate: 180deg;
  background-position: center;
  }
  
  .react-calendar__navigation__prev2-button {
  background-image: url(${calendarDoubleArrow});
  rotate: 180deg;
  background-position: center;
  }
  
`,
);
