import { BottomTabScreenProps as BaseBottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { ParamListBase } from "@react-navigation/native";

export interface BottomTabParamList extends ParamListBase {
  Home: undefined;
  Search: undefined;
}

type Screen = keyof BottomTabParamList;

export type BottomTabScreenProps<T extends Screen = Screen> =
  BaseBottomTabScreenProps<BottomTabParamList, T>;
