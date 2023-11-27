import { create } from "zustand";
import { Calendar, CalendarAction } from "@/zustand/types/calendarTypes.ts";
import { selectedCalendar } from "@/zustand/actions/calendarActions.ts";

const initDate = new Date();

export const useCalendar = create<Calendar & CalendarAction>((set) => ({
  ...selectedCalendar(initDate.getFullYear(), initDate.getMonth()),
  selectedCalendar: (year: number, month: number) =>
    set(() => selectedCalendar(year, month)),
}));
