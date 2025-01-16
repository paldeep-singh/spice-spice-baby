import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { theme, ThemeContext } from "./utils/theme";
import { HomeScreen } from "./screens/Home";
import { SearchScreen } from "./screens/Search";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

export function App() {
  return (
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
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
          </Tab.Navigator>

          <StatusBar style="inverted" />
        </SafeAreaProvider>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
