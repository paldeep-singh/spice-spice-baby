import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { theme, ThemeContext } from "./utils/theme";
import { HomeScreen } from "./screens/Home";
import { SearchScreen } from "./screens/Search";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export function App(): JSX.Element {
  return (
    <GestureHandlerRootView>
      <StatusBar style="inverted" />
      <ThemeContext.Provider value={theme}>
        <NavigationContainer>
          <SafeAreaProvider>
            <Tab.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: theme.background.base },
                headerTitleStyle: { color: theme.text.base },
                tabBarStyle: {
                  backgroundColor: theme.background.light,
                  borderTopColor: theme.background.light,
                },
                tabBarActiveTintColor: theme.text.selected,
                animation: "shift",
              }}
              screenLayout={({ children }) => (
                <SafeAreaView
                  style={{
                    backgroundColor: theme.background.base,
                    flex: 1,
                  }}
                >
                  {children}
                </SafeAreaView>
              )}
            >
              <Tab.Screen
                name="Home"
                component={HomeScreen}
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
                name="Search"
                component={SearchScreen}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <Ionicons
                      name={focused ? "search" : "search-outline"}
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
