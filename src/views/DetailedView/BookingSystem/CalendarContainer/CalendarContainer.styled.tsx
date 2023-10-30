import Calendar from "react-calendar";
import { styled } from "@mui/material";
import calendarArrow from "../../../../shared/assets/calendar-arrow.svg";
import calendarDoubleArrow from "../../../../shared/assets/calendar-double-arrow.svg";

export const StyledCalendar = styled(Calendar)(
  ({ theme }) => `
  border: 1px solid rgba(0, 0, 0, 0.10);
  border-radius: 18px;
  font-family: ${theme.typography.fontFamily};
  background: #FDFDFD;
  
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
    color: ${theme.palette.customGrey.main};
  }
  
  .react-calendar__month-view__days__day {
    color: ${theme.palette.customGrey.main};
  }
  
  .react-calendar__month-view__days__day--neighboringMonth {
    color: rgba(0, 0, 0, 0.39);
  }
  
  .react-calendar__navigation__next-button {
  text-indent: -9999px;
  background-image: url(${calendarArrow});
  background-position: center;
  }
  
  .react-calendar__navigation__next2-button {
  text-indent: -9999px;
  background-image: url(${calendarDoubleArrow});
  background-position: center;
  }
  
  .react-calendar__navigation__prev-button {
  text-indent: -9999px;
  background-image: url(${calendarArrow});
  rotate: 180deg;
  background-position: center;
  }
  
  .react-calendar__navigation__prev2-button {
  text-indent: -9999px;
  background-image: url(${calendarDoubleArrow});
  rotate: 180deg;
  background-position: center;
  }
  
`,
);
