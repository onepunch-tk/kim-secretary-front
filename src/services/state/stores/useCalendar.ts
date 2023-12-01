import { create } from "zustand";
import {
  CalendarAction,
  CalendarState,
} from "@/services/state/types/calendarTypes.ts";
import { selectedCalendar } from "@/services/state/actions/calendarActions.ts";

const initDate = new Date();

export const useCalendar = create<CalendarState & CalendarAction>((set) => ({
  ...selectedCalendar(initDate),
  selectedCalendar: (selectedDate: Date) =>
    set(() => selectedCalendar(selectedDate)),
}));
