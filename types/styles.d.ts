import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        purple: string;
        pink: string;
      };
      secondary: {
        blue: string;
        green: string;
        pink: string;
      };
      text: {
        "grey-100": string;
        "grey-200": string;
        "grey-300": string;
        "grey-400": string;
        "grey-500": string;
        "grey-600": string;
      };
    };
  }
}
