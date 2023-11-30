import { SEO } from "@components/SEO.tsx";
import { Navbar } from "@components/Navbar.tsx";
import { Outlet } from "react-router-dom";

export function Root() {
  return (
    <main className="relative flex flex-col items-center xl:pl-60">
      <SEO
        title="김비서 - home"
        name="김비서"
        description="test"
        type="summary_large_image"
      />
      <Navbar />
      <Outlet />
    </main>
  );
}
