import Holiday, { HolidaysTypes } from "date-holidays";
import { Day } from "@/zustand/types/calendarTypes.ts";

const hd = new Holiday("KR");

const checkIsHoliday = (holiday: false | HolidaysTypes.Holiday[]): boolean =>
  Array.isArray(holiday);

export const getCurrentDays = (_year: number, _month: number): Day[] => {
  const currentDate = new Date(_year, _month, 1);
  const days: Day[] = [];
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  while (currentDate.getMonth() === _month) {
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
