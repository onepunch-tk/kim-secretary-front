import { cls } from "@utils/helper";
import { Day } from "@services/state/types/calendarTypes";
import { DayWrapper } from "@components/ui/(calendar)/Day.tsx";

interface CalendarWrapperProps {
  className?: string;
  days: Partial<Day>[];
  onlyName: boolean;
}
export function CalendarWrapper({
  className,
  days,
  onlyName,
}: CalendarWrapperProps) {
  return (
    <div
      className={cls(
        "box-border grid w-full grid-cols-7 overflow-y-auto",
        className
      )}
    >
      {days.map((day, index) => (
        <DayWrapper
          key={index}
          onlyName={onlyName}
          {...day}
          className={cls(
            onlyName ? "cursor-default" : "mt-0.5 cursor-pointer shadow-sm"
          )}
          {...(!onlyName && { innerBorder: "visible" })}
        />
      ))}
    </div>
  );
}
