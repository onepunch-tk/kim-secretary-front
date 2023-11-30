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
    text: {
      default: "text-[0.55rem] md:text-xs xl:text-lg xl:font-semibold",
      opacity30:
        "text-[0.55rem] md:text-xs xl:text-lg xl:font-semibold text-white/30",
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
    innerBorder,
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
          text: role === "current" || role === "day" ? "default" : "opacity30",
          ...(!onlyName && { innerBorder: "visible" }),
        })
      )}
    >
      <div className="h-full p-1">
        <div
          className={cls("h-full rounded-md p-1", dayVariants({ innerBorder }))}
        >
          <div className="flex justify-end">
            {onlyName ? (
              <span
                className={cls({
                  "text-dangerous": isHoliday,
                })}
              >
                {dayName}
              </span>
            ) : (
              <span>{dayNumber}</span>
            )}
          </div>
          {isHoliday ? <span>{holiday}</span> : null}
        </div>
      </div>
    </article>
  );
}
