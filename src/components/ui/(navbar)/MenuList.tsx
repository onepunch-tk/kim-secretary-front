import { menuList, useMenuStore } from "@/services/state/stores/menu.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { cls } from "@utils/helper.ts";

export function MenuList() {
  const { mainMenu, subMenu, selectedMainMenu, selectedSubMenu } =
    useMenuStore();

  return (
    <ul id="menu-list">
      {menuList.map((menu, index) => (
        <li
          className="menu-item mb-1 cursor-pointer md:mb-0"
          key={index}
          onClick={() => selectedMainMenu(menu.menuName)}
        >
          <div
            className={cls(
              "main-menu flex items-center justify-between rounded-xl border-txt-primary px-2.5 py-1 transition-[background-color] duration-300 hover:bg-section-secondary md:px-3.5 md:py-2.5",
              { "bg-section-secondary": mainMenu === menu.menuName }
            )}
          >
            <div className="flex items-center">
              <FontAwesomeIcon
                className="text-xs md:text-sm"
                icon={menu.icon}
              />
              <span className="ml-2.5 text-xs font-semibold md:text-sm">
                {menu.menuName}
              </span>
            </div>
            <FontAwesomeIcon
              className="text-xs md:text-sm"
              icon={mainMenu === menu.menuName ? faChevronDown : faChevronRight}
            />
          </div>
          {mainMenu === menu.menuName && (
            <div className="sub-menu-container mt-1.5 flex flex-col pl-3">
              {menu.subMenu.map((menu, index) => (
                <span
                  className={cls(
                    "sub-menu mb-1 rounded-xl px-2.5 py-1 text-xs transition-[background-color,color] hover:bg-accent hover:text-black md:p-2.5 md:text-sm",
                    {
                      "bg-accent text-black font-semibold":
                        subMenu === menu.menuName,
                    }
                  )}
                  key={index}
                  onClick={() => selectedSubMenu(menu.menuName)}
                >
                  {`• ${menu.menuName}`}
                </span>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
