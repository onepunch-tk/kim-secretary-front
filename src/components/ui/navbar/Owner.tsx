import styled from "styled-components";
import { flexCenter } from "@styles/common/flex-box.ts";

const OwnerWrapper = styled(flexCenter)`
  width: 100%;
  margin-top: 20px;
  justify-content: start;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.size.text.sm};
`;

const OwnerTitle = styled.span`
  display: block;
  min-width: 70px;
`;

const OwnerName = styled.span``;

type OwnerProps = {
  ownerName: string;
};

export function Owner({ ownerName }: OwnerProps) {
  return (
    <OwnerWrapper>
      <OwnerTitle>점주</OwnerTitle>
      <OwnerName>{ownerName}</OwnerName>
    </OwnerWrapper>
  );
}
