import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/views/App.tsx";
import GlobalStyles from "@styles/GlobalStyles.tsx";
import { ThemeProvider } from "styled-components";
import darkTheme from "@styles/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
