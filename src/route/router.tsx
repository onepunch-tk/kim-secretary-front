import { createBrowserRouter } from "react-router-dom";
import { Root } from "@/route/Root.tsx";
import { Home } from "@views/Home.tsx";

export const router = createBrowserRouter([
  {
    path: import.meta.env.PUBLIC_URL,
    element: <Root />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);
