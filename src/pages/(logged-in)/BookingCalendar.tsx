import { CalendarWrapper } from "@components/ui/(calendar)/CalendarWrapper.tsx";
import { Calendar } from "@services/state/types/calendarTypes";
import { useCalendar } from "@services/state/stores/useCalendar.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { tv } from "tailwind-variants";
import { cls } from "@utils/helper.ts";

const dayOfWeeks: Partial<Calendar>[] = [
  {
    day: {
      role: "day",
      list: [
        { dayName: "일", isHoliday: true, dayNumber: 0 },
        { dayName: "월", dayNumber: 0 },
        { dayName: "화", dayNumber: 0 },
        { dayName: "수", dayNumber: 0 },
        { dayName: "목", dayNumber: 0 },
        { dayName: "금", dayNumber: 0 },
        { dayName: "토", isHoliday: true, dayNumber: 0 },
      ],
    },
  },
];

export function BookingCalendar() {
  const { currentDate, prevDate, nextDate, selectedCalendar } = useCalendar();
  const changeCalendarHandle = (role: "prev" | "next") => {
    const dateOffset = 1;

    const updateDate = new Date(currentDate.date);
    updateDate.setMonth(
      role === "prev"
        ? updateDate.getMonth() - dateOffset
        : updateDate.getMonth() + dateOffset
    );

    selectedCalendar(updateDate);
  };

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
          {`${currentDate.date}`}
        </h3>
        <FontAwesomeIcon
          className={cls(button())}
          icon={faChevronRight}
          onClick={() => changeCalendarHandle("next")}
        />
      </div>
      <CalendarWrapper
        onlyName={true}
        calendars={dayOfWeeks}
        className={"mb-2 rounded-lg shadow-sm"}
      />
      <CalendarWrapper
        calendars={[
          prevDate ? { ...prevDate } : ({} as Partial<Calendar>),
          currentDate,
          nextDate ? { ...nextDate } : ({} as Partial<Calendar>),
        ]}
        onlyName={false}
        className="rounded-lg shadow-sm"
      />
    </section>
  );
}
