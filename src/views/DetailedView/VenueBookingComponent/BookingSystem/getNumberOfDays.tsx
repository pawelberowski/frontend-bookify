import { DatesValues } from "./useCalendarDates.tsx";
const ONE_DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;

export const getNumberOfDays = (value: DatesValues) => {
  if (Array.isArray(value)) {
    const startDate = value[0]?.getTime();
    const endDate = value[1]?.getTime();
    if (startDate !== endDate) {
      return Math.round(
        Math.abs(
          ((endDate ?? 2 * ONE_DAY_IN_MILLISECONDS) -
            (startDate ?? ONE_DAY_IN_MILLISECONDS)) /
            ONE_DAY_IN_MILLISECONDS,
        ),
      );
    }
    return 1;
  }
};
