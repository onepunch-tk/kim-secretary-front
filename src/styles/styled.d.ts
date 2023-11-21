// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      section: {
        main: string;
        secondary: string;
      };
      text: {
        primary: string;
        secondary: string;
      };
      accent: {
        main: "#f97316";
        secondary: "#7c3aed";
        primary: "#2563eb";
        alert: "#dc2626";
      };
      border: string;
      shadow: "#0a0a0a";
    };
  }
}
