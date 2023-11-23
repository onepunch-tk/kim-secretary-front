import { css, CSSProp } from "styled-components";

// 디바이스 사이즈를 정의하는 인터페이스입니다. 각 키는 디바이스 이름을 나타내고, 값은 해당 디바이스의 최대 너비(픽셀 단위)를 나타냅니다.
interface Sizes {
  [index: string]: number;
}

// 실제 디바이스 사이즈를 정의하는 객체입니다. 여기서는 데스크탑, 태블릿, 폰에 대한 최대 너비를 정의하고 있습니다.
const sizes: Sizes = {
  desktop: 1024,
  tablet: 929,
  phone: 576,
};

// 미디어 쿼리를 생성하는 함수의 타입을 정의합니다. 이 함수는 템플릿 문자열과 임의의 수의 인자들을 받아 CSSProp을 반환합니다.
type Media = {
  [index in keyof Sizes]: (
    literals: TemplateStringsArray,
    ...placeholders: any[]
  ) => CSSProp;
};

// sizes 객체를 순회하며 각 디바이스 사이즈에 대응하는 미디어 쿼리 함수를 생성합니다.
export const media: Media = Object.keys(sizes).reduce(
  (acc: Partial<Media>, label: string) => {
    // 미디어 쿼리 함수를 정의합니다. 이 함수는 템플릿 문자열과 임의의 수의 인자들을 받아 CSS 규칙을 생성합니다.
    acc[label as keyof Sizes] = (
      literals: TemplateStringsArray,
      ...placeholders: any[]
    ) => {
      return css`
        @media (max-width: ${sizes[label as keyof Sizes] / 16}em) {
          ${css(literals, ...placeholders)}
        }
      `;
    };

    return acc;
  },
  {}
) as Media;

export const test = (
  px: number,
  literals: TemplateStringsArray,
  ...placeholders: any[]
) => css`
  @media (max-width: ${px / 16}em) {
    ${css(literals, ...placeholders)}
  }
`;
