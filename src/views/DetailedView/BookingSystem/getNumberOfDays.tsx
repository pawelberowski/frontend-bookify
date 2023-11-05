import { DatesValues } from "./useCalendarDates.tsx";

export const getNumberOfDays = (value: DatesValues) => {
  if (Array.isArray(value)) {
    const startDate = value[0]?.getTime();
    const endDate = value[1]?.getTime();
    if (startDate !== endDate) {
      const oneDay = 24 * 60 * 60 * 1000;
      return Math.round(
        Math.abs(((endDate ?? 2 * oneDay) - (startDate ?? oneDay)) / oneDay),
      );
    }
    return 1;
  }
};
