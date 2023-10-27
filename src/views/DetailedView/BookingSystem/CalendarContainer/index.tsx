import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { StyledCalendar } from "./CalendarContainer.styled.tsx";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const CalendarContainer = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <StyledCalendar onChange={onChange} value={value} />
    </div>
  );
};
