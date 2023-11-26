import styled from "styled-components";
import { flexCenter, flexCenterCol } from "@styles/common/flex-box.ts";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdsWrapper = styled(flexCenter)`
  padding: 5px 15px;
  width: 100%;
  justify-content: start;
  border: solid 2px ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  cursor: pointer;
`;
const IconWrapper = styled(flexCenter)`
  padding: 10px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.accent.main};
  color: ${({ theme }) => theme.colors.shadow};
  margin-right: 10px;
`;
const ContentWrapper = styled(flexCenterCol)`
  padding: 10px 0;
  align-items: start;
  h2 {
    color: ${({ theme }) => theme.colors.accent.main};
    font-weight: bold;
    margin-bottom: 5px;
  }
  span {
    font-size: ${({ theme }) => theme.size.text.xs};
  }
`;
export function Ads() {
  return (
    <AdsWrapper>
      <IconWrapper>
        <FontAwesomeIcon icon={faShoppingBasket} size="lg" />
      </IconWrapper>
      <ContentWrapper>
        <h2>김비서 스토어</h2>
        <span>샵 재료 구매까지 한번에!</span>
      </ContentWrapper>
    </AdsWrapper>
  );
}
