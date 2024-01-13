import { DatesValues } from "./useCalendarDates.tsx";
const ONE_DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;

export const getNumberOfDays = (value: DatesValues): number | null => {
  if (!Array.isArray(value) || value.length !== 2) {
    return null; // Invalid input, expecting an array with two date values
  }

  const startDate = value[0]?.getTime();
  const endDate = value[1]?.getTime();

  if (startDate !== undefined && endDate !== undefined) {
    // Calculate the difference in days
    const daysDifference = Math.round(
      Math.abs((endDate - startDate) / ONE_DAY_IN_MILLISECONDS),
    );

    // Ensure the result is a positive number
    return Math.max(1, daysDifference);
  }

  return null; // Handle cases where either start or end date is undefined
};
