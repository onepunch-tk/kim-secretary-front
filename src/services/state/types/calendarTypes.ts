export interface Day {
  dayNumber: number;
  dayName: string;
  isHoliday?: boolean;
  holiday?: string;
}

export type Role = "current" | "prev" | "next" | "day";

export interface Calendar {
  date: string;
  day: {
    role: Role;
    list: Day[];
  };
}

export interface CalendarState {
  prevDate?: Calendar;
  currentDate: Calendar;
  nextDate?: Calendar;
}

export interface CalendarAction {
  selectedCalendar: (selectedDate: Date) => void;
}
