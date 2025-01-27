import { StatusBar } from "expo-status-bar";
import { createNativeBottomTabNavigator } from "@bottom-tabs/react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { theme, ThemeContext } from "./utils/theme";
import { DiscoverScreen } from "./screens/Discover";
import { PlaceholderScreen } from "./screens/Placeholder";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomTabParamList } from "./navigation/types";
import { StyleSheet, ViewStyle } from "react-native";
import { Camera } from "./components/Camera";
import { getTabBarIcon } from "./utils/getTabBarIcon";

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
                name="Planner"
                component={PlaceholderScreen}
                options={{
                  tabBarIcon: ({ focused }) => getTabBarIcon("list", focused),
                }}
              />
              <Tab.Screen
                name="Discover"
                component={DiscoverScreen}
                options={{
                  tabBarIcon: ({ focused }) =>
                    getTabBarIcon("diamond", focused),
                }}
              />
              <Tab.Screen
                name="Camera"
                component={Camera}
                options={{
                  tabBarIcon: ({ focused }) => getTabBarIcon("camera", focused),
                }}
              />
            </Tab.Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
      </ThemeContext.Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: theme.background.base,
    flex: 1,
  } satisfies ViewStyle,
  tabHeader: {
    backgroundColor: theme.background.base,
  } satisfies ViewStyle,
  tabHeaderTitle: { color: theme.text.base },
  tabBar: {
    backgroundColor: theme.background.light,
    borderTopColor: theme.background.light,
  },
});
