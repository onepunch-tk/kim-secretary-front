import darkTheme from "@styles/theme.ts";
import GlobalStyles from "@styles/GlobalStyles.tsx";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { router } from "@/route/router.tsx";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
