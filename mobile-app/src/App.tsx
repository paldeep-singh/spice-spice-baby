import { StatusBar } from "expo-status-bar";
import { createNativeBottomTabNavigator } from "@bottom-tabs/react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { theme, ThemeContext } from "./utils/theme";
import { DiscoverScreen } from "./screens/Discover";
import { PlaceholderScreen } from "./screens/Placeholder";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomTabParamList } from "./navigation/types";
import { getTabBarIcon } from "./utils/getTabBarIcon";
import { InventoryScreen } from "./screens/Inventory";

const Tab = createNativeBottomTabNavigator<BottomTabParamList>();

export function App(): JSX.Element {
  return (
    <GestureHandlerRootView>
      <StatusBar style="inverted" />
      <ThemeContext.Provider value={theme}>
        <NavigationContainer>
          <SafeAreaProvider>
            <Tab.Navigator
              tabBarInactiveTintColor={"grey"}
              tabBarActiveTintColor={theme.text.selected}
              tabBarStyle={{
                backgroundColor: theme.background.light,
              }}
            >
              <Tab.Screen
                name="Home"
                component={PlaceholderScreen}
                options={{
                  tabBarIcon: ({ focused }) => getTabBarIcon("home", focused),
                }}
              />
              <Tab.Screen
                name="Inventory"
                component={InventoryScreen}
                options={{
                  tabBarIcon: ({ focused }) =>
                    getTabBarIcon("inventory", focused),
                }}
              />
              <Tab.Screen
                name="Recipes"
                component={InventoryScreen}
                options={{
                  tabBarIcon: ({ focused }) =>
                    getTabBarIcon("recipes", focused),
                }}
              />
              <Tab.Screen
                name="Discover"
                component={DiscoverScreen}
                options={{
                  tabBarIcon: ({ focused }) =>
                    getTabBarIcon("discover", focused),
                }}
              />
              {/* <Tab.Screen
                name="Camera"
                component={Camera}
                options={{
                  tabBarIcon: ({ focused }) => getTabBarIcon("camera", focused),
                }}
              /> */}
            </Tab.Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
      </ThemeContext.Provider>
    </GestureHandlerRootView>
  );
}
