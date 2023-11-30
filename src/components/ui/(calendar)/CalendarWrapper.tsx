import { cls } from "@utils/helper";
import { Calendar, Role } from "@services/state/types/calendarTypes";
import { DayWrapper } from "@components/ui/(calendar)/DayWrapper.tsx";
import { memo } from "react";

interface CalendarWrapperProps {
  className?: string;
  calendars: Partial<Calendar>[];
  onlyName: boolean;
}
export const CalendarWrapper = memo(function CalendarWrapper({
  className,
  calendars,
  onlyName,
}: CalendarWrapperProps) {
  return (
    <div
      className={cls(
        "box-border grid w-full grid-cols-7 overflow-y-auto",
        className
      )}
    >
      {calendars.map((calendar) =>
        calendar.day?.list.map((day, index) => (
          <DayWrapper
            key={index}
            {...day}
            onlyName={onlyName}
            onClick={() => console.log(calendar.day?.date?.toISOString())}
            role={calendar.day?.role as Role}
          />
        ))
      )}
    </div>
  );
});
