import Holiday, { HolidaysTypes } from "date-holidays";
import { create } from "zustand";

const hd = new Holiday("KR");
interface Day {
  dayNumber: number;
  dayName: string;
  isHoliday: boolean;
  name?: string;
}
interface Calendar {
  year: string;
  month: string;
  days: Day[];
}

interface CalendarAction {
  selectedCalendar: (year: number, month: number) => void;
}
const checkIsHoliday = (holiday: false | HolidaysTypes.Holiday[]) =>
  Array.isArray(holiday);
const getCurrentCalendar = (_year: number, _month: number): Calendar => {
  const currentDate = new Date(_year, _month, 1);
  const year = currentDate.getFullYear().toString();
  const month = (currentDate.getMonth() + 1).toString();
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
  return {
    year,
    month,
    days,
  };
};

const initDate = new Date();
export const useCalendar = create<Calendar & CalendarAction>((set) => {
  return {
    ...getCurrentCalendar(initDate.getFullYear(), initDate.getMonth()),
    selectedCalendar: (year: number, month: number) =>
      set(() => ({ ...getCurrentCalendar(year, month) })),
  };
});
