import darkTheme from "@styles/theme.ts";
import GlobalStyles from "@styles/GlobalStyles.tsx";
import { ThemeProvider } from "styled-components";
import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <HelmetProvider>
        <Outlet />
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
