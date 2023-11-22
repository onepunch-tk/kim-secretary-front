import { createBrowserRouter } from "react-router-dom";
import { Root } from "@/route/Root.tsx";
import { Home } from "@views/Home.tsx";

export const router = createBrowserRouter([
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
]);
