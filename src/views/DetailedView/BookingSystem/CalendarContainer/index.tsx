import { useMemo, useState } from "react";
import "react-calendar/dist/Calendar.css";
import {
  CalendarWrapper,
  StyledCalendar,
} from "./CalendarContainer.styled.tsx";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const CalendarContainer = () => {
  const [startDate, setStartDate] = useState<ValuePiece>(new Date());
  const [endDate, setEndDate] = useState<ValuePiece>(new Date());

  const value: Value = useMemo(() => {
    return [startDate, endDate];
  }, [startDate, endDate]);

  function handleChange(newValue: Value) {
    if (Array.isArray(newValue)) {
      setStartDate(newValue[0]);
      setEndDate(newValue[1]);
    } else {
      setStartDate(newValue);
      setEndDate(newValue);
    }
  }
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
