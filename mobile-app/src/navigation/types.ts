import { NativeBottomTabScreenProps } from "@bottom-tabs/react-navigation";
import { ParamListBase } from "@react-navigation/native";

export interface BottomTabParamList extends ParamListBase {
  Home: undefined;
  Inventory: undefined;
  Discover: undefined;
  Camera: undefined;
  Recipes: undefined;
}

type Screen = keyof BottomTabParamList;

export type BottomTabScreenProps<T extends Screen = Screen> =
  NativeBottomTabScreenProps<BottomTabParamList, T>;
