import {
  dateFormat,
  getCurrentDays,
  getNextDate,
  getPrevDate,
} from "@/services/state/utils/dateUtils";
import { CalendarState } from "@/services/state/types/calendarTypes";

export const selectedCalendar = (selectedDate: Date): CalendarState => {
  const prevDate = getPrevDate(selectedDate);
  const currentDayList = getCurrentDays(selectedDate);
  const totalDays =
    (prevDate ? prevDate.day.list.length : 0) + currentDayList.length;
  const nextDate = getNextDate(selectedDate, totalDays);
  return {
    prevDate,
    currentDate: {
      date: dateFormat(selectedDate),
      day: {
        role: "current",
        list: currentDayList,
      },
    },
    nextDate,
  };
};
