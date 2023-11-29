import { create } from "zustand";
import {
  CalendarAction,
  CalendarState,
} from "@/services/state/types/calendarTypes.ts";
import { selectedCalendar } from "@/services/state/actions/calendarActions.ts";
import { months } from "@/services/state/utils/dateUtils.ts";

const initDate = new Date();

export const useCalendar = create<CalendarState & CalendarAction>((set) => ({
  ...selectedCalendar(initDate.getFullYear(), months[initDate.getMonth()]),
  selectedCalendar: (year: number, month: number) =>
    set(() => selectedCalendar(year, month)),
}));
