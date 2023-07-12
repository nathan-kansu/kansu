import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: {
      l: string;
      m: string;
      s: string;
    };
    colors: {
      black: string;
      darkBlue: string;
      grey: string;
      white: string;
    };
    fonts: {
      heading: string;
    };
  }
}
