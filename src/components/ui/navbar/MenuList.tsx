import styled from "styled-components";
import { flexBox, flexCenterCol } from "@styles/common/flex-box.ts";
import { menuList, useMenuStore } from "@utils/store/menu.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { transition } from "@styles/common/helper.ts";

const List = styled(flexCenterCol)`
  width: 100%;
`;

const MenuWrapper = styled(flexCenterCol)`
  width: 100%;
  cursor: pointer;
`;

const MainMenuWrapper = styled(flexBox)<{ $isSelected: boolean }>`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.section.secondary : "transparent"};
  ${transition.easeInOut({ property: "background-color" })};
  &:hover {
    background-color: ${({ theme }) => theme.colors.section.secondary};
  }
`;

const SubMenuWrapper = styled(flexCenterCol)`
  align-items: start;
  width: 100%;
  padding-left: 10px;
  row-gap: 5px;
`;
const SubMenu = styled.span<{ $isSelected: boolean }>`
  display: block;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 5px;
  padding: 10px 10px;
  font-size: ${({ theme }) => theme.size.text.sm};
  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.accent.main : "transparent"};
  ${transition.easeInOut({ property: "background-color" })};
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent.main};
  }
`;

export function MenuList() {
  const { mainMenu, subMenu, selectedMainMenu, selectedSubMenu } =
    useMenuStore();
  return (
    <List as="ul">
      {menuList.map((menu, index) => (
        <MenuWrapper
          as="li"
          key={index}
          onClick={() => selectedMainMenu(menu.menuName)}
        >
          <MainMenuWrapper $isSelected={mainMenu === menu.menuName}>
            <span>{menu.menuName}</span>
            <FontAwesomeIcon
              icon={mainMenu === menu.menuName ? faChevronDown : faChevronRight}
            />
          </MainMenuWrapper>
          {mainMenu === menu.menuName && (
            <SubMenuWrapper>
              {menu.subMenu.map((menu, index) => (
                <SubMenu
                  $isSelected={subMenu === menu.menuName}
                  key={index}
                  onClick={() => selectedSubMenu(menu.menuName)}
                >
                  {`• ${menu.menuName}`}
                </SubMenu>
              ))}
            </SubMenuWrapper>
          )}
        </MenuWrapper>
      ))}
    </List>
  );
}
