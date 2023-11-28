import { SEO } from "@components/SEO.tsx";
import { Navbar } from "@components/Navbar.tsx";
import { Outlet } from "react-router-dom";

export function Root() {
  return (
    <main className="flex flex-col items-center justify-center">
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
    </main>
  );
}
