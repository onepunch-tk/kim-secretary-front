export interface Day {
  dayNumber: number;
  dayName: string;
  isHoliday: boolean;
  holiday?: string;
}
export interface Calendar {
  year: number;
  month: number;
  days: Day[];
}

export interface CalendarState {
  prevDate?: Calendar;
  currentDate: Calendar;
  nextDate?: Calendar;
}

export interface CalendarAction {
  selectedCalendar: (year: number, month: number) => void;
}
