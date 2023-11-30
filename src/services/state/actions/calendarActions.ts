import {
  getCurrentDays,
  getPrevDate,
} from "@/services/state/utils/dateUtils.ts";
import { CalendarState } from "@/services/state/types/calendarTypes.ts";

export const selectedCalendar = (
  year: number,
  month: number
): CalendarState => {
  const prevDate = getPrevDate(year, month);
  return {
    prevDate,
    currentDate: {
      year,
      month,
      day: {
        role: "current",
        date: new Date(year, month, 1),
        list: getCurrentDays(year, month),
      },
    },
  };
};
