export interface Day {
  dayNumber: number;
  dayName: string;
  isHoliday?: boolean;
  holiday?: string;
}

export type Role = "current" | "prev" | "next" | "day";

export interface Calendar {
  year: number;
  month: number;
  day: {
    role: Role;
    date?: Date;
    list: Day[];
  };
}

export interface CalendarState {
  prevDate?: Calendar;
  currentDate: Calendar;
  nextDate?: Calendar;
}

export interface CalendarAction {
  selectedCalendar: (year: number, month: number) => void;
}
