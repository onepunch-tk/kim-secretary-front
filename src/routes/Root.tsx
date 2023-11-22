import SEO from "@components/SEO.tsx";
import { Outlet } from "react-router-dom";

export function Root() {
  return (
    <main>
      <div>
        <SEO
          title="김비서 - home"
          name="김비서"
          description="test"
          type="summary_large_image"
        />
      </div>
      <Outlet />
    </main>
  );
}
