import { Profile } from "@components/ui/(navbar)/Profile.tsx";
import { Fragment, useState } from "react";
import { Menu } from "@components/ui/(navbar)/Menu.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Ads } from "@components/ui/(navbar)/Ads.tsx";
import { cls } from "@utils/helper.ts";

const dummyProfileData = {
  shopName: "티케이 헤어",
  ownerName: "01062872629",
  alarmCount: 19,
};

export function Navbar() {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <Fragment>
      <nav
        className={cls(
          "fixed top-0 z-50 flex h-[100svh] w-60 flex-col justify-between overflow-y-scroll bg-section p-2 shadow-lg transition-[left] duration-300",
          visible ? "left-0" : "-left-60 shadow-none",
          "xl:left-0 xl:overflow-y-auto"
        )}
      >
        <Profile {...dummyProfileData} />
        <Menu />
        <Ads />
      </nav>
      <div
        id="visible-btn"
        className={cls(
          "visible fixed left-5 top-5 z-50 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-accent p-1 text-black shadow-sm transition-[left] duration-300 xl:invisible",
          { "left-[245px]": visible }
        )}
        onClick={() => setVisible((prev) => !prev)}
      >
        <FontAwesomeIcon icon={visible ? faChevronLeft : faChevronRight} />
      </div>
    </Fragment>
  );
}
