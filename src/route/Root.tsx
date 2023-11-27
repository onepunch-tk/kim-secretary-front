import { SEO } from "@components/SEO.tsx";
import styled from "styled-components";
import { flexCenterCol } from "@styles/common/flex-box.ts";
import { Navbar } from "@components/Navbar.tsx";
import { Outlet } from "react-router-dom";

const MainWrapper = styled(flexCenterCol)``;

export function Root() {
  return (
    <MainWrapper as="main">
      <div>
        <SEO
          title="김비서 - home"
          name="김비서"
          description="test"
          type="summary_large_image"
        />
      </div>
      <Navbar />
      <Outlet />
    </MainWrapper>
  );
}
