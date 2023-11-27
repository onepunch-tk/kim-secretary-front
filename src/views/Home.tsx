import { useCalendar } from "@/zustand/stores/useCalendar.ts";
import { Fragment } from "react";

export function Home() {
  const { year, month, days, selectedCalendar } = useCalendar();
  const changeCalendarHandle = (navDir: "prev" | "next") => {
    const updateDate = {
      year: Number(year),
      month: 0,
    };
    if (navDir === "prev") {
      updateDate.year =
        Number(month) === 1 ? Number(year) - 1 : updateDate.year;
      updateDate.month = Number(month) === 1 ? 11 : Number(month) - 2;
      selectedCalendar(updateDate.year, updateDate.month);
    } else {
      updateDate.year =
        Number(month) === 12 ? Number(year) + 1 : updateDate.year;
      updateDate.month = Number(month) === 12 ? 0 : Number(month);
      selectedCalendar(updateDate.year, updateDate.month);
    }
  };
  return (
    <Fragment>
      <div className="flex w-56 h-56 bg-primary"></div>
      <h1 className="text-3xl">{year}</h1>
      <h2 className="text-emerald-900">{month}</h2>
      {days.map((day) => (
        <div key={day.dayNumber}>
          <span>{day.dayNumber}</span>
          <span>{day.dayName}</span>
          {day.isHoliday ? <span>{day.name}</span> : null}
        </div>
      ))}
      <button onClick={() => changeCalendarHandle("prev")}>prev</button>
      <button onClick={() => changeCalendarHandle("next")}>next</button>
    </Fragment>
  );
}
