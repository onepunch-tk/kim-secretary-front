import { createBrowserRouter } from "react-router-dom";
import { Root } from "@/route/Root.tsx";
import { Home } from "@views/Home.tsx";

console.log(import.meta.env.PUBLIC_URL);
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
