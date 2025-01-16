import { createContext, useContext } from "react";
import { ColorValue } from "react-native";

interface Theme {
  background: {
    base: string;
    light: string;
  };
  text: {
    base: string;
    selected: string;
  };
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
};

export const ThemeContext = createContext<Theme>(theme);

export const useTheme = (): Theme => useContext(ThemeContext);
