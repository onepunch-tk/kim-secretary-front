import { Day } from "@services/state/types/calendarTypes";
import { cls } from "@utils/helper";
import { tv, VariantProps } from "tailwind-variants";
import { Role } from "@services/state/types/calendarTypes.ts";
import { HTMLAttributes } from "react";

interface DayProps extends Partial<Day> {
  onlyName?: boolean;
  role: Role;
}

const dayVariants = tv({
  variants: {
    contentsHeight: {
      full: "h-20 xl:h-44 ",
      onlyName: "h-auto",
    },
    textSize: {
      default: "text-[0.55rem] md:text-xs xl:text-lg xl:font-semibold",
      holiday: "text-[0.65rem]",
    },
    textColor: {
      default: "text-txt-primary",
      notCurrentMonth: "text-white/30",
      holidayCurrentMonth: "text-dangerous",
      holidayNotCurrentMonth: "text-red-500/30",
    },
    innerBorder: {
      visible: "hover:border hover:border-dashed hover:border-accent-secondary",
    },
  },
});

export function DayWrapper(
  props: DayProps &
    Partial<VariantProps<typeof dayVariants>> &
    HTMLAttributes<HTMLElement>
) {
  const {
    role,
    onlyName = false,
    dayName,
    dayNumber,
    holiday,
    isHoliday,
    onClick,
  } = props;
  return (
    <article
      onClick={onClick}
      className={cls(
        "mt-0.5 cursor-pointer bg-neutral-700/30 shadow-sm",
        { "mt-0 cursor-default": onlyName },
        { "bg-background": role === "current" || role === "day" },
        dayVariants({
          contentsHeight: onlyName ? "onlyName" : "full",
        })
      )}
    >
      <div className="h-full p-1">
        <div
          className={cls(
            "h-full rounded-md p-1",
            dayVariants({ innerBorder: "visible" })
          )}
        >
          <div className="flex w-full items-center justify-between">
            <span
              className={cls(
                {
                  "block invisible md:visible h-auto rounded-md bg-confirm px-1.5 text-center truncate":
                    isHoliday && !(role === "day"),
                },
                dayVariants({
                  textSize: "holiday",
                })
              )}
            >
              {holiday}
            </span>
            {onlyName ? (
              <span
                className={cls(
                  dayVariants({
                    textSize: "default",
                    textColor: isHoliday ? "holidayCurrentMonth" : "default",
                  })
                )}
              >
                {dayName}
              </span>
            ) : (
              <span
                className={cls(
                  dayVariants({
                    textSize: "default",
                    textColor: !isHoliday
                      ? role === "current"
                        ? "default"
                        : "notCurrentMonth"
                      : role === "current"
                      ? "holidayCurrentMonth"
                      : "holidayNotCurrentMonth",
                  })
                )}
              >
                {dayNumber}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
