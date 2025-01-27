import CameraOutline from "@assets/tab-bar-icons/camera-outline.png";
import Camera from "@assets/tab-bar-icons/camera.png";
import ClipboardOutline from "@assets/tab-bar-icons/clipboard-outline.png";
import Clipboard from "@assets/tab-bar-icons/clipboard.png";
import DiamondOutline from "@assets/tab-bar-icons/diamond-outline.png";
import Diamond from "@assets/tab-bar-icons/diamond.png";
import HomeOutline from "@assets/tab-bar-icons/home-outline.png";
import Home from "@assets/tab-bar-icons/home.png";
import { ImageSourcePropType } from "react-native";

type TabBarIconName = "home" | "camera" | "discover" | "planner";

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
    case "planner":
      return focused ? Clipboard : ClipboardOutline;
  }
}
