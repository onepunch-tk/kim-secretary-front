import Holiday, { HolidaysTypes } from "date-holidays";
import { Calendar, Day } from "@/services/state/types/calendarTypes";

const hd = new Holiday("KR");

const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
export const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const checkIsHoliday = (holiday: false | HolidaysTypes.Holiday[]): boolean =>
  Array.isArray(holiday);

export const getCurrentDays = (selectedDate: Date): Day[] => {
  const conditionDate = new Date(selectedDate);
  const dateOffset = 1;
  const days: Day[] = [];
  while (selectedDate.getMonth() === conditionDate.getMonth()) {
    days.push(getDay(conditionDate));
    conditionDate.setDate(conditionDate.getDate() + dateOffset);
  }
  return days;
};

export const getPrevDate = (currentDate: Date): Calendar | undefined => {
  const offset = 1;
  const sunday = 0;
  const days: Day[] = [];

  if (currentDate.getDay() === sunday) return undefined;

  const conditionDate = new Date(currentDate);
  conditionDate.setDate(currentDate.getDate() - offset);

  const endIdx = currentDate.getDay();
  for (let startIdx = 0; startIdx < endIdx; startIdx++) {
    days.push(getDay(conditionDate));
    conditionDate.setDate(conditionDate.getDate() - offset);
  }

  days.sort((a, b) => a.dayNumber - b.dayNumber);
  return {
    date: dateFormat(conditionDate),
    day: {
      role: "prev",
      list: days,
    },
  };
};

export const getNextDate = (currentDate: Date, totalDays: number): Calendar => {
  const offset = 1;
  const maxDays = 42;
  const days: Day[] = [];

  const conditionDate = new Date(currentDate);
  conditionDate.setMonth(currentDate.getMonth() + offset);

  for (let index = totalDays; index < maxDays; index++) {
    days.push(getDay(conditionDate));
    conditionDate.setDate(conditionDate.getDate() + offset);
  }

  return {
    date: dateFormat(conditionDate),
    day: {
      role: "next",
      list: days,
    },
  };
};

const getDay = (date: Date): Day => {
  const result = hd.isHoliday(date);
  let isHoliday = checkIsHoliday(result);
  let holiday: string = isHoliday
    ? (result as HolidaysTypes.Holiday[])[0].name
    : "";
  if (isHoliday) {
    switch (holiday) {
      case "제헌절":
        isHoliday = false;
        holiday = "";
        break;
      case "기독탄신일":
        holiday = "크리스마스";
        break;
      default:
        break;
    }
  }
  return {
    dayNumber: date.getDate(),
    dayName: daysOfWeek[date.getDay()],
    isHoliday,
    holiday,
  };
};

export const getMonthIndex = (month: number) => months.indexOf(month);

export const dateFormat = (date: Date) =>
  `${date.getFullYear()}.${date.getMonth() + 1}`;
