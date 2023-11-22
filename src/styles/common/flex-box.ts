import styled from "styled-components";
import React from "react";

type BlockElement = Extract<
  keyof React.JSX.IntrinsicElements,
  | "div"
  | "section"
  | "article"
  | "main"
  | "footer"
  | "header"
  | "nav"
  | "aside"
  | "ul"
  | "ol"
  | "li"
  | "figure"
>;

type FlexProps = {
  as?: BlockElement;
};
export const flexBox = styled.div<FlexProps>`
  display: flex;
`;

export const flexCenter = styled(flexBox)`
  justify-content: center;
  align-items: center;
`;

export const flexCenterCol = styled(flexCenter)`
  flex-direction: column;
`;
