import CameraOutline from "@assets/tab-bar-icons/camera-outline.png";
import Camera from "@assets/tab-bar-icons/camera.png";
import ClipboardOutline from "@assets/tab-bar-icons/clipboard-outline.png";
import Clipboard from "@assets/tab-bar-icons/clipboard.png";
import DiamondOutline from "@assets/tab-bar-icons/diamond-outline.png";
import Diamond from "@assets/tab-bar-icons/diamond.png";
import HomeOutline from "@assets/tab-bar-icons/home-outline.png";
import Home from "@assets/tab-bar-icons/home.png";
import Pizza from "@assets/tab-bar-icons/pizza.png";
import PizzaOutline from "@assets/tab-bar-icons/pizza-outline.png";

import { ImageSourcePropType } from "react-native";

type TabBarIconName = "home" | "camera" | "discover" | "inventory" | "recipes";

export function getTabBarIcon(
  name: TabBarIconName,
  focused: boolean,
): ImageSourcePropType {
  switch (name) {
    case "camera":
      return focused ? Camera : CameraOutline;
    case "discover":
      return focused ? Diamond : DiamondOutline;
    case "home":
      return focused ? Home : HomeOutline;
    case "inventory":
      return focused ? Clipboard : ClipboardOutline;
    case "recipes":
      return focused ? Pizza : PizzaOutline;
  }
}
