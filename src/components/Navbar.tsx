import styled from "styled-components";
import { flexCenter, flexCenterCol } from "@styles/common/flex-box.ts";
import { Profile } from "@components/ui/navbar/Profile.tsx";
import { media } from "@styles/common/helper.ts";
import { Fragment, useState } from "react";
import { Menu } from "@components/ui/navbar/Menu.tsx";

const NavbarWrapper = styled(flexCenterCol)<{ $barVisible: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  padding: 8px;
  width: 240px;
  height: 100vh;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.section.main};
  overflow-x: hidden;
  ${media.tablet`
  left:${({ $barVisible }: { $barVisible: boolean }) =>
    $barVisible ? "0" : "-240px"};
    `}
  transition:left 300ms ease-in-out;
`;

const NavbarVisibleBtn = styled(flexCenter)<{ $barVisible: boolean }>`
  visibility: hidden;
  cursor: pointer;
  position: fixed;
  top: 20px;
  left: ${(props) => (props.$barVisible ? "100px" : "20px")};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding: 5px;
  color: ${({ theme }) => theme.colors.shadow};
  background-color: ${({ theme }) => theme.colors.accent.main};
  box-shadow: 0.7px 0.5px 4px ${({ theme }) => theme.colors.shadow};
  transition: left 300ms ease-in-out;
  ${media.tablet`visibility:visible`}
`;

const dummyProfileData = {
  shopName: "티케이 헤어",
  ownerName: "01062872629",
  alarmCount: 19,
};

export function Navbar() {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <Fragment>
      <NavbarWrapper $barVisible={visible}>
        <Profile {...dummyProfileData} />
        <Menu />
      </NavbarWrapper>
      <NavbarVisibleBtn
        $barVisible={visible}
        onClick={() => setVisible((prev) => !prev)}
      >
        {visible ? "←" : "→"}
      </NavbarVisibleBtn>
    </Fragment>
  );
}
