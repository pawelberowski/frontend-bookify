import { useMemo, useState } from "react";

type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];
export const useCalendarDates = () => {
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
  return { value, handleChange };
};
