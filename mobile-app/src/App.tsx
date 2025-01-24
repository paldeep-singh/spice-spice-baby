import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { theme, ThemeContext } from "./utils/theme";
import { DiscoverScreen } from "./screens/Home";
import { PlaceholderScreen } from "./screens/Placeholder";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BottomTabParamList } from "./navigation/types";
import { StyleSheet, ViewStyle } from "react-native";

const Tab = createBottomTabNavigator<BottomTabParamList>();

export function App(): JSX.Element {
  return (
    <GestureHandlerRootView>
      <StatusBar style="inverted" />
      <ThemeContext.Provider value={theme}>
        <NavigationContainer>
          <SafeAreaProvider>
            <Tab.Navigator
              screenOptions={{
                headerStyle: styles.tabHeader,
                headerTitleStyle: styles.tabHeaderTitle,
                tabBarStyle: styles.tabBar,
                tabBarActiveTintColor: theme.text.selected,
                animation: "shift",
              }}
            >
              <Tab.Screen
                name="Home"
                component={PlaceholderScreen}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <Ionicons
                      name={focused ? "home" : "home-outline"}
                      color={focused ? theme.text.selected : theme.text.base}
                      size={16}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Planner"
                component={PlaceholderScreen}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <Ionicons
                      name={focused ? "clipboard" : "clipboard-outline"}
                      color={focused ? theme.text.selected : theme.text.base}
                      size={16}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Discover"
                component={DiscoverScreen}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <Ionicons
                      name={focused ? "diamond" : "diamond-outline"}
                      color={focused ? theme.text.selected : theme.text.base}
                      size={16}
                    />
                  ),
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
