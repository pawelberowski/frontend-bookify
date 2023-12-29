import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import {
  CalendarWrapper,
  StyledCalendar,
} from "./CalendarContainer.styled.tsx";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const CalendarContainer = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <CalendarWrapper>
      <StyledCalendar
        onChange={onChange}
        value={value}
        calendarType="gregory"
        prevLabel=""
        prev2Label=""
        nextLabel=""
        next2Label=""
        formatShortWeekday={(_locale, date) =>
          [`S`, `M`, `T`, `W`, `T`, `F`, `S`][date.getDay()]
        }
      />
    </CalendarWrapper>
  );
};
