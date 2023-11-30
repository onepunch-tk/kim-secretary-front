import Holiday, { HolidaysTypes } from "date-holidays";
import { Calendar, Day } from "@/services/state/types/calendarTypes";

const hd = new Holiday("KR");

const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
export const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const checkIsHoliday = (holiday: false | HolidaysTypes.Holiday[]): boolean =>
  Array.isArray(holiday);

export const getCurrentDays = (year: number, month: number): Day[] => {
  // const monthIndex = getMonthIndex(month);
  const currentDate = new Date(year, month, 1);
  const days: Day[] = [];
  while (currentDate.getMonth() === month) {
    days.push(getDay(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return days;
};

export const getPrevDate = (
  year: number,
  month: number
): Calendar | undefined => {
  const offset = 1;
  const sunday = 0;
  // const monthIndex = getMonthIndex(month);
  const currentDate = new Date(year, month - offset, 1);
  const days: Day[] = [];

  if (currentDate.getDay() === sunday) return undefined;

  const endIdx = currentDate.getDay();
  for (let startIdx = 0; startIdx < endIdx; startIdx++) {
    currentDate.setDate(currentDate.getDate() - offset);
    days.push(getDay(currentDate));
  }

  days.sort((a, b) => a.dayNumber - b.dayNumber);
  return {
    year: currentDate.getFullYear(),
    month: months[currentDate.getMonth()],
    day: {
      role: "prev",
      date: currentDate,
      list: days,
    },
  };
};

const getDay = (date: Date): Day => {
  const holiday = hd.isHoliday(date);
  return {
    dayNumber: date.getDate(),
    dayName: daysOfWeek[date.getDay()],
    isHoliday: checkIsHoliday(holiday),
    ...(checkIsHoliday(holiday) && {
      name: (holiday as HolidaysTypes.Holiday[])[0].name,
    }),
  };
};

export const getMonthIndex = (month: number) => months.indexOf(month);
