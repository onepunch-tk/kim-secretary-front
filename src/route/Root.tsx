import { SEO } from "@components/SEO.tsx";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { flexBox, flexCenterCol } from "@styles/common/flex-box.ts";

const Test = styled(flexCenterCol)``;

const Test1 = styled(flexBox)`
  width: 200px;
  height: 200px;
  background-color: chocolate;
`;

export function Root() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Test as="main">
      <div>
        <SEO
          title="김비서 - home"
          name="김비서"
          description="test"
          type="summary_large_image"
        />
      </div>
      <Test1 as="figure" />
      <Test1 />
      <Outlet />
    </Test>
  );
}
