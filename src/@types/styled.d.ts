import 'styled-componets';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;

      mainBackground: string;

      text: string;
      red: string;
    };
  }
}
