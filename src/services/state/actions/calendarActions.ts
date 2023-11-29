import { getCurrentDays } from "@/services/state/utils/dateUtils.ts";
import { CalendarState } from "@/services/state/types/calendarTypes.ts";

export const selectedCalendar = (
  year: number,
  month: number
): CalendarState => {
  return {
    currentDate: {
      year,
      month,
      days: getCurrentDays(year, month),
    },
  };
};
