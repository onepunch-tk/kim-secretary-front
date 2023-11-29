import Holiday, { HolidaysTypes } from "date-holidays";
import { Day } from "@/services/state/types/calendarTypes";

const hd = new Holiday("KR");

const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
export const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const checkIsHoliday = (holiday: false | HolidaysTypes.Holiday[]): boolean =>
  Array.isArray(holiday);

export const getCurrentDays = (_year: number, _month: number): Day[] => {
  const monthIndex = getMonthIndex(_month);
  const currentDate = new Date(_year, monthIndex, 1);
  const days: Day[] = [];
  while (currentDate.getMonth() === monthIndex) {
    const holiday = hd.isHoliday(currentDate);
    days.push({
      dayNumber: currentDate.getDate(),
      dayName: daysOfWeek[currentDate.getDay()],
      isHoliday: checkIsHoliday(holiday),
      ...(checkIsHoliday(holiday) && {
        name: (holiday as HolidaysTypes.Holiday[])[0].name,
      }),
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return days;
};

export const getMonthIndex = (month: number) => months.indexOf(month);
