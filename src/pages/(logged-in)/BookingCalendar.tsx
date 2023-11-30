import { CalendarWrapper } from "@components/ui/(calendar)/CalendarWrapper.tsx";
import { Calendar } from "@services/state/types/calendarTypes";
import { useCalendar } from "@services/state/stores/useCalendar.ts";
import { months } from "@services/state/utils/dateUtils.ts";
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
  const { currentDate, prevDate, selectedCalendar } = useCalendar();
  const changeCalendarHandle = (role: "prev" | "next") => {
    const january = months[0];
    const december = months[months.length - 1];
    const dateOffset = 1;
    let updateDate: { year: number; month: number } = {
      year: 0,
      month: 0,
    };
    if (role === "prev") {
      /*전 월로 이동할때.*/
      updateDate =
        currentDate.month === january /*현재 1월이라면...*/
          ? /*한 해 전으로 이동...*/
            { year: currentDate.year - dateOffset, month: december }
          : /*년은 그대로 두고 월만 전 월로...*/
            {
              year: currentDate.year,
              month: currentDate.month - dateOffset,
            };
    } else {
      /*다음 월로 이동할때*/
      updateDate =
        currentDate.month === december /*현재 12월이면...*/
          ? /*한해를 넘긴다.*/
            { year: currentDate.year + dateOffset, month: january }
          : /* 년은 그대로 두고, 월만 다음 월로./. */
            {
              year: currentDate.year,
              month: currentDate.month + dateOffset,
            };
    }
    selectedCalendar(updateDate.year, updateDate.month);
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
        calendars={dayOfWeeks}
        className={"mb-2 rounded-lg shadow-sm"}
      />
      <CalendarWrapper
        calendars={[
          prevDate ? { ...prevDate } : ({} as Partial<Calendar>),
          currentDate,
        ]}
        onlyName={false}
        className="rounded-lg shadow-sm"
      />
    </section>
  );
}
