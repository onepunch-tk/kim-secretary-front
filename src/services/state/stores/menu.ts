import { create } from "zustand";
import {
  faBell,
  faCalendarCheck,
  faCircleQuestion,
  faSliders,
  faStore,
  faUser,
  faWonSign,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export enum MAIN_MENU_NAME {
  HOME = "홈",
  SALE = "매출",
  CUSTOMER = "고객",
  SMS = "마케팅",
  MY_SHOP = "우리샵 관리",
  SETTING = "기타 설정",
  CS = "고객센터",
}

export enum SUB_MENU_NAME {
  HOME_CALENDAR = "예약 캘린더",
  HOME_TODAY_SALE = "오늘의 현황",
  SALE_HOME = "매출 등록/목록",
  SALE_MY_SHOP = "우리샵 매출",
  SALE_CUSTOMER = "고객별 매출",
  SALE_EMPLOYEE = "직원별 매출",
  CUSTOMER_HOME = "고객 차트",
  CUSTOMER_POINT = "회원권/포인트 관리",
  SMS_SEND = "문자 발송",
  SMS_KAKAO = "알림톡/자동 문자",
  SMS_HISTORIES = "발송 내역",
  SMS_RECHARGE = "알림 충전/내역",
  MY_SHOP_COSMETIC = "시술 메뉴",
  MY_SHOP_PRODUCT = "제품 관리",
  MY_SHOP_EMPLOYEE = "직원 관리",
  MY_SHOP_POINT = "포인트/행사",
  SETTING_SHOP = "샵 정보 설정",
  SETTING_NAVER = "네이버예약 연동",
  SETTING_LOCK = "화면 잠금 관리",
  CS_NOTICE = "공지사항",
  CS_EVENT = "이벤트 게시판",
  CS_QNA = "문의하기",
}
export interface Menu {
  menuName: MAIN_MENU_NAME;
  icon: IconDefinition;
  subMenu: {
    menuName: SUB_MENU_NAME;
    url: string;
  }[];
}

export const menuList: Menu[] = [
  {
    menuName: MAIN_MENU_NAME.HOME,
    icon: faCalendarCheck,
    subMenu: [
      { menuName: SUB_MENU_NAME.HOME_CALENDAR, url: "" },
      { menuName: SUB_MENU_NAME.HOME_TODAY_SALE, url: "" },
    ],
  },
  {
    menuName: MAIN_MENU_NAME.SALE,
    icon: faWonSign,
    subMenu: [
      { menuName: SUB_MENU_NAME.SALE_HOME, url: "" },
      { menuName: SUB_MENU_NAME.SALE_MY_SHOP, url: "" },
      { menuName: SUB_MENU_NAME.SALE_CUSTOMER, url: "" },
      { menuName: SUB_MENU_NAME.SALE_EMPLOYEE, url: "" },
    ],
  },
  {
    menuName: MAIN_MENU_NAME.CUSTOMER,
    icon: faUser,
    subMenu: [
      { menuName: SUB_MENU_NAME.CUSTOMER_HOME, url: "" },
      { menuName: SUB_MENU_NAME.CUSTOMER_POINT, url: "" },
    ],
  },
  {
    menuName: MAIN_MENU_NAME.SMS,
    icon: faBell,
    subMenu: [
      { menuName: SUB_MENU_NAME.SMS_SEND, url: "" },
      { menuName: SUB_MENU_NAME.SMS_KAKAO, url: "" },
      { menuName: SUB_MENU_NAME.SMS_HISTORIES, url: "" },
      { menuName: SUB_MENU_NAME.SMS_RECHARGE, url: "" },
    ],
  },
  {
    menuName: MAIN_MENU_NAME.MY_SHOP,
    icon: faStore,
    subMenu: [
      { menuName: SUB_MENU_NAME.MY_SHOP_COSMETIC, url: "" },
      { menuName: SUB_MENU_NAME.MY_SHOP_PRODUCT, url: "" },
      { menuName: SUB_MENU_NAME.MY_SHOP_EMPLOYEE, url: "" },
      { menuName: SUB_MENU_NAME.MY_SHOP_POINT, url: "" },
    ],
  },
  {
    menuName: MAIN_MENU_NAME.SETTING,
    icon: faSliders,
    subMenu: [
      { menuName: SUB_MENU_NAME.SETTING_SHOP, url: "" },
      { menuName: SUB_MENU_NAME.SETTING_NAVER, url: "" },
      { menuName: SUB_MENU_NAME.SETTING_LOCK, url: "" },
    ],
  },
  {
    menuName: MAIN_MENU_NAME.CS,
    icon: faCircleQuestion,
    subMenu: [
      { menuName: SUB_MENU_NAME.CS_NOTICE, url: "" },
      { menuName: SUB_MENU_NAME.CS_EVENT, url: "" },
      { menuName: SUB_MENU_NAME.CS_QNA, url: "" },
    ],
  },
];

export interface MenuState {
  mainMenu: MAIN_MENU_NAME;
  subMenu?: SUB_MENU_NAME;
}
export interface MenuActon {
  selectedMainMenu: (newSelectedMenu: MenuState["mainMenu"]) => void;
  selectedSubMenu: (newSelectedMenu: MenuState["subMenu"]) => void;
}

export const useMenuStore = create<MenuState & MenuActon>((set) => ({
  mainMenu: MAIN_MENU_NAME.HOME,
  subMenu: SUB_MENU_NAME.HOME_CALENDAR,
  selectedMainMenu: (mainMenu) => set(() => ({ mainMenu })),
  selectedSubMenu: (subMenu) => set(() => ({ subMenu })),
}));
