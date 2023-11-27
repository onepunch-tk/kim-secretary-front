import { getCurrentDays } from "@/zustand/utils/dateUtils.ts";
import { Calendar } from "@/zustand/types/calendarTypes.ts";

export const selectedCalendar = (year: number, month: number): Calendar => {
  const currentDate = new Date(year, month, 1);
  return {
    year: currentDate.getFullYear().toString(),
    month: (currentDate.getMonth() + 1).toString(),
    days: getCurrentDays(year, month),
  };
};
