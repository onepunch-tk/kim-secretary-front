import { createBrowserRouter } from "react-router-dom";
import { Root } from "@/route/Root.tsx";
import { Home } from "@views/Home.tsx";

console.log();
export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ],
  {
    ...(import.meta.env.VITE_DEPLOY_ROLE === "gh-pages" && {
      basename: "/kim-secretary-front",
    }),
  }
);
