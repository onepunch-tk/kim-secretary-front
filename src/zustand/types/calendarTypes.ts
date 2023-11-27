export interface Day {
  dayNumber: number;
  dayName: string;
  isHoliday: boolean;
  name?: string;
}
export interface Calendar {
  year: string;
  month: string;
  days: Day[];
}

export interface CalendarAction {
  selectedCalendar: (year: number, month: number) => void;
}
