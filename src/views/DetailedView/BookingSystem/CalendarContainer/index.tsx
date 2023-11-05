import "react-calendar/dist/Calendar.css";
import {
  CalendarWrapper,
  StyledCalendar,
} from "./CalendarContainer.styled.tsx";
import { DatesValues } from "../useCalendarDates.tsx";
import { FunctionComponent } from "react";

interface Props {
  value: DatesValues;
  handleChange: (newValue: DatesValues) => void;
}
export const CalendarContainer: FunctionComponent<Props> = ({
  value,
  handleChange,
}) => {
  return (
    <CalendarWrapper>
      <StyledCalendar
        onChange={handleChange}
        value={value}
        calendarType="gregory"
        prevLabel=""
        prev2Label=""
        nextLabel=""
        next2Label=""
        formatShortWeekday={(_locale, date) =>
          [`S`, `M`, `T`, `W`, `T`, `F`, `S`][date.getDay()]
        }
        selectRange={true}
        goToRangeStartOnSelect={true}
      />
    </CalendarWrapper>
  );
};
