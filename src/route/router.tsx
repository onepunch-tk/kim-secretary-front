import { createBrowserRouter } from "react-router-dom";
import { Root } from "@/route/Root.tsx";
import { HomeScreen } from "@/pages/(logged-in)/HomeScreen.tsx";

console.log();
export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <HomeScreen />,
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
