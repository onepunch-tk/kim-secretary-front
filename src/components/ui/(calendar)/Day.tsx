import { Day } from "@services/state/types/calendarTypes";
import { cls } from "@utils/helper";
import { tv, VariantProps } from "tailwind-variants";

interface DayProps extends Partial<Day> {
  onlyName?: boolean;
  className?: string;
}

const dayVariants = tv({
  variants: {
    contents: {
      full: "h-20 xl:h-44 ",
      onlyName: "bg-transparent h-auto",
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
  props: DayProps & Partial<VariantProps<typeof dayVariants>>
) {
  const {
    onlyName = false,
    className,
    dayName,
    dayNumber,
    holiday,
    isHoliday,
    text = "default",
    innerBorder,
  } = props;
  return (
    <article
      className={cls(
        "bg-background",
        className,
        dayVariants({ contents: onlyName ? "onlyName" : "full" })
      )}
    >
      <div className="h-full p-1">
        <div
          className={cls("h-full rounded-md p-1", dayVariants({ innerBorder }))}
        >
          <div className="flex justify-end">
            {onlyName ? (
              <span
                className={cls(dayVariants({ text: "default" }), {
                  "text-dangerous": isHoliday,
                })}
              >
                {dayName}
              </span>
            ) : (
              <span className={cls(dayVariants({ text }))}>{dayNumber}</span>
            )}
          </div>
          {isHoliday ? <span>{holiday}</span> : null}
        </div>
      </div>
    </article>
  );
}
