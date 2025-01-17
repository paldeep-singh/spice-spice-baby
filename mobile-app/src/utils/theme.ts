import { createContext, useContext } from "react";

interface Theme {
  background: {
    base: string;
    light: string;
  };
  text: {
    base: string;
    selected: string;
  };
  primary: string;
}

export const theme: Theme = {
  background: {
    base: "#22262E",
    light: "#323232",
  },
  text: {
    base: "#ffffff",
    selected: "#FF8258",
  },
  primary: "#F15D67",
};

export const ThemeContext = createContext<Theme>(theme);

export const useTheme = (): Theme => useContext(ThemeContext);
