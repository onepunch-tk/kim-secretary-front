import styled from "styled-components";
import { flexBox, flexCenterCol } from "@styles/common/flex-box.ts";
import { Shop } from "@components/ui/navbar/Shop.tsx";

const NavbarWrapper = styled(flexCenterCol)`
  position: fixed;
  left: 0;
  top: 0;
  padding: 8px;
  width: 240px;
  height: 100vh;
  justify-content: space-between;
`;
const ProfileWrapper = styled(flexCenterCol)`
  width: 100%;
  padding: 12px;
`;

const OwnerWrapper = styled(flexBox)`
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.size.text.sm};
`;

export function Navbar() {
  return (
    <NavbarWrapper>
      <ProfileWrapper>
        <Shop shopName="티케이 헤어" />
        <OwnerWrapper>
          <span>점주</span>
          <span>01062872629</span>
        </OwnerWrapper>
      </ProfileWrapper>
    </NavbarWrapper>
  );
}
