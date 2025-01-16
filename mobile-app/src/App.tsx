import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { theme, ThemeContext } from "./utils/theme";
import { HomeScreen } from "./screens/Home";
import { SearchScreen } from "./screens/Search";

const Tab = createBottomTabNavigator();

export function App() {
  return (
    <ThemeContext.Provider value={theme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: theme.background.base },
            headerTitleStyle: { color: theme.text.base },
            tabBarStyle: {
              backgroundColor: theme.background.light,
              borderTopColor: theme.background.light,
            },
            tabBarActiveTintColor: theme.text.selected,
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>

        <StatusBar style="inverted" />
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
