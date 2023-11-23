import { Shop } from "@components/ui/navbar/Shop.tsx";
import { Owner } from "@components/ui/navbar/Owner.tsx";
import { Message } from "@components/ui/navbar/Message.tsx";
import styled from "styled-components";
import { flexCenterCol } from "@styles/common/flex-box.ts";

const ProfileWrapper = styled(flexCenterCol)<{ visible: boolean }>`
  width: 100%;
  padding: 12px;
`;

type ProfileProps = {
  shopName: string;
  ownerName: string;
  alarmCount: number;
};

export function Profile({ shopName, ownerName, alarmCount }: ProfileProps) {
  return (
    <ProfileWrapper>
      <Shop shopName={shopName} />
      <Owner ownerName={ownerName} />
      <Message alarmCount={alarmCount} />
    </ProfileWrapper>
  );
}
