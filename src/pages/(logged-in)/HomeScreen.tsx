import { Fragment } from "react";
import { BookingCalendar } from "@pages/(logged-in)/BookingCalendar.tsx";

export function HomeScreen() {
  return (
    <Fragment>
      <BookingCalendar />
    </Fragment>
    // <section className="flex w-full flex-col items-center overflow-x-auto px-3 xl:px-10">
    //   <h1 className="text-3xl">{currentDate.year}</h1>
    //   <h2 className="text-emerald-900">{currentDate.month}</h2>
    //   <div className="grid w-full grid-cols-7">
    //     <DayWrapper onlyName={true} dayName="일" />
    //     <DayWrapper onlyName={true} dayName="월" />
    //     <DayWrapper onlyName={true} dayName="화" />
    //     <DayWrapper onlyName={true} dayName="수" />
    //     <DayWrapper onlyName={true} dayName="목" />
    //     <DayWrapper onlyName={true} dayName="금" />
    //     <DayWrapper onlyName={true} dayName="토" />
    //   </div>
    //   <div className="grid w-full grid-cols-7 divide-x divide-y divide-txt-secondary border-b border-r border-txt-secondary">
    //     <DayWrapper
    //       dayNumber={29}
    //       isHoliday={false}
    //       className="bg-neutral-700/30"
    //       text={"opacity30"}
    //     />
    //     <DayWrapper
    //       dayNumber={30}
    //       isHoliday={false}
    //       className="bg-neutral-700/30"
    //     />
    //     <DayWrapper
    //       dayNumber={31}
    //       isHoliday={false}
    //       className="bg-neutral-700/30"
    //       text={"opacity30"}
    //     />
    //     {currentDate.days.map((day) => (
    //       <DayWrapper
    //         key={day.dayNumber}
    //         {...day}
    //         innerBorder={"visible"}
    //       ></DayWrapper>
    //     ))}
    //     <DayWrapper
    //       dayNumber={1}
    //       isHoliday={true}
    //       className="bg-neutral-700/30"
    //     />
    //     <DayWrapper
    //       dayNumber={2}
    //       isHoliday={false}
    //       className="bg-neutral-700/30"
    //     />
    //     <DayWrapper
    //       dayNumber={3}
    //       isHoliday={false}
    //       className="bg-neutral-700/30"
    //     />
    //     <DayWrapper
    //       dayNumber={4}
    //       isHoliday={false}
    //       className="bg-neutral-700/30"
    //     />
    //     <DayWrapper
    //       dayNumber={5}
    //       isHoliday={false}
    //       className="bg-neutral-700/30"
    //     />
    //     <DayWrapper
    //       dayNumber={6}
    //       isHoliday={false}
    //       className="bg-neutral-700/30"
    //     />
    //     <DayWrapper
    //       dayNumber={7}
    //       isHoliday={false}
    //       className="bg-neutral-700/30"
    //     />
    //     <DayWrapper
    //       dayNumber={8}
    //       isHoliday={false}
    //       className="bg-neutral-700/30"
    //     />
    //     <DayWrapper
    //       dayNumber={9}
    //       isHoliday={false}
    //       className="bg-neutral-700/30"
    //     />
    //   </div>
    //   <button onClick={() => changeCalendarHandle("prev")}>prev</button>
    //   <button onClick={() => changeCalendarHandle("next")}>next</button>
    // </section>
  );
}
