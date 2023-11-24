import styled from "styled-components";
import { flexCenterCol } from "@styles/common/flex-box.ts";
import { MenuList } from "@components/ui/navbar/MenuList.tsx";

const MenuWrapper = styled(flexCenterCol)`
  width: 100%;
  flex-grow: 1;
  justify-content: space-between;
`;
export function Menu() {
  return (
    <MenuWrapper>
      <MenuList />
    </MenuWrapper>
  );
}
