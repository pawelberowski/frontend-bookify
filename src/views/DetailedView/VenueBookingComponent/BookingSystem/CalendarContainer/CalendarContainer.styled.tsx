import Calendar from "react-calendar";
import { Box, styled, css } from "@mui/material";
import calendarArrow from "../../../../../shared/assets/calendar-arrow.svg";
import calendarDoubleArrow from "../../../../../shared/assets/calendar-double-arrow.svg";

export const CalendarWrapper = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const StyledCalendar = styled(Calendar)(
  ({ theme }) => css`
    width: auto;
    border: 1px solid ${theme.palette.customGrey.lightest};
    border-radius: 18px;
    font-family: ${theme.typography.fontFamily};
    background: ${theme.palette.customGrey.contrastText};
    padding: ${theme.spacing(6)} ${theme.spacing(3)} ${theme.spacing(11)}
      ${theme.spacing(3)};

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

    .react-calendar__tile {
      border-radius: 16px;
    }

    .react-calendar__tile--hasActive {
      &:enabled {
        background: ${theme.palette.primary.main};
      }
    }

    .react-calendar__tile--active {
      background: ${theme.palette.primary.main};
      &:hover {
        background: ${theme.palette.grey["500"]};
      }
      &:focus {
        background: ${theme.palette.primary.main};
      }
    }
    .react-calendar__tile--now {
      background: ${theme.palette.grey.A400};
      &:hover {
        background: ${theme.palette.grey["500"]};
      }
    }
  `,
);
