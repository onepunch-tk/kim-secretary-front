import { CalendarWrapper } from "@components/ui/(calendar)/CalendarWrapper.tsx";
import { Day } from "@services/state/types/calendarTypes";
import { useCalendar } from "@services/state/stores/useCalendar.ts";
import { months } from "@services/state/utils/dateUtils.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { tv } from "tailwind-variants";
import { cls } from "@utils/helper.ts";

export function BookingCalendar() {
  const { currentDate, selectedCalendar } = useCalendar();
  const changeCalendarHandle = (role: "prev" | "next") => {
    const january = months[0];
    const december = months[months.length - 1];
    const dateOffset = 1;
    let updatedYear: number;
    let updatedMonth: number;
    if (role === "prev") {
      updatedYear =
        currentDate.month === january
          ? currentDate.year - dateOffset
          : currentDate.year;
      updatedMonth =
        currentDate.month === january
          ? december
          : currentDate.month - dateOffset;
    } else {
      updatedYear =
        currentDate.month === december
          ? currentDate.year + dateOffset
          : currentDate.year;
      updatedMonth =
        currentDate.month === december
          ? january
          : currentDate.month + dateOffset;
    }
    selectedCalendar(updatedYear, updatedMonth);
  };
  const dayOfWeeks: Partial<Day>[] = [
    { dayName: "일", isHoliday: true },
    { dayName: "월" },
    { dayName: "화" },
    { dayName: "수" },
    { dayName: "목" },
    { dayName: "금" },
    { dayName: "토", isHoliday: true },
  ];

  const button = tv({
    base: "cursor-pointer text-xs xl:text-lg hover:scale-110 hover:transition-[scale] hover:duration-300",
  });

  return (
    <section className="flex w-full flex-col items-center overflow-x-auto p-3 xl:px-10">
      <div className="flex items-center justify-center space-x-5 py-2">
        <FontAwesomeIcon
          className={cls(button())}
          icon={faChevronLeft}
          onClick={() => changeCalendarHandle("prev")}
        />
        <h3 className="font-semibold tracking-widest xl:text-2xl">
          {`${currentDate.year}.${currentDate.month}`}
        </h3>
        <FontAwesomeIcon
          className={cls(button())}
          icon={faChevronRight}
          onClick={() => changeCalendarHandle("next")}
        />
      </div>
      <CalendarWrapper
        onlyName={true}
        days={dayOfWeeks}
        className={"mb-2 rounded-lg shadow-sm"}
      />
      <CalendarWrapper
        days={currentDate.days}
        onlyName={false}
        className="rounded-lg shadow-sm"
      />
    </section>
  );
}
