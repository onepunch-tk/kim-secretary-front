import styled from "styled-components";
import { flexCenter } from "@styles/common/flex-box.ts";
import { Link } from "react-router-dom";
import { useState } from "react";

const ShopWrapper = styled(flexCenter)`
  width: 100%;
  justify-content: space-between;
`;

const SettingBtn = styled(flexCenter)`
  cursor: pointer;
  padding: 3px;
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  font-weight: bold;
  font-size: ${({ theme }) => theme.size.text.xs};
  color: ${({ theme }) => theme.colors.text.primary};
  border: solid 2px ${({ theme }) => theme.colors.text.primary};
  border-radius: 50%;
`;
const ShopNameLink = styled(Link)`
  color: ${({ theme }) => theme.colors.accent.main};
  font-weight: bold;
`;
const ShopName = styled.h3``;

type ShopProps = {
  shopName: string;
};
export function Shop({ shopName }: ShopProps) {
  const [active, setActive] = useState(false);
  return (
    <ShopWrapper>
      <ShopNameLink to="/">
        <ShopName>{shopName}</ShopName>
      </ShopNameLink>
      <SettingBtn onClick={() => setActive((prev) => !prev)}>
        {active ? "↑" : "↓"}
      </SettingBtn>
    </ShopWrapper>
  );
}
