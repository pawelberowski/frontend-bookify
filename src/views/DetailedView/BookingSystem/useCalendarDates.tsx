import { useMemo, useState } from "react";

export type DateValue = Date | null;

export type DatesValues = DateValue | [DateValue, DateValue];
export const useCalendarDates = () => {
  const [startDate, setStartDate] = useState<DateValue>(new Date());
  const [endDate, setEndDate] = useState<DateValue>(new Date());

  const value: DatesValues = useMemo(() => {
    return [startDate, endDate];
  }, [startDate, endDate]);

  function handleChange(newValue: DatesValues) {
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
