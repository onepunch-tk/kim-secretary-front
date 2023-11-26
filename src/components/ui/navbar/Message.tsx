import styled from "styled-components";
import { flexCenter } from "@styles/common/flex-box.ts";
import { Link } from "react-router-dom";

const MessageWrapper = styled(flexCenter)`
  width: 100%;
  justify-content: start;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.size.text.sm};
`;
const MessageTitle = styled.span`
  display: block;
  min-width: 70px;
`;
const AlarmCount = styled.span``;
const ChargeHistoryLink = styled(Link)`
  display: block;
  border: solid 2px ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text.primary};
  border-radius: 10px;
  padding: 3px 16px;
  margin-left: auto;
`;

type MessageProps = {
  alarmCount: number;
};

export function Message({ alarmCount }: MessageProps) {
  return (
    <MessageWrapper>
      <MessageTitle>잔여 알림</MessageTitle>
      <AlarmCount>{alarmCount}</AlarmCount>
      <ChargeHistoryLink to="">충전</ChargeHistoryLink>
    </MessageWrapper>
  );
}
