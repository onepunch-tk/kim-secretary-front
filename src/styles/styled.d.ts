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
    responsive: {
      tablet: "(max-width: 820px)";
      phone: "(max-width: 576px)";
    };
    size: {
      text: {
        xs: "0.75rem";
        sm: "0.875rem";
        base: "1rem";
        lg: "1.125rem";
        xl: "1.25rem";
        xl2: "1.5rem";
        xl3: "1.875rem";
        xl4: "2.25rem";
        xl5: "3rem";
        xl6: "3.75rem";
        xl7: "4.5rem";
        xl8: "6rem";
        xl9: "8rem";
      };
    };
  }
}
