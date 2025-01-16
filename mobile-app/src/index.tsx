import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { theme, ThemeContext } from "./utils/theme";

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
          <Tab.Screen
            name="Home"
            component={() => (
              <View style={styles.container}>
                <Text style={styles.text}>Spice Spice Baby Home Screen</Text>
                <StatusBar style="auto" />
              </View>
            )}
          />
          <Tab.Screen
            name="Search"
            component={() => (
              <View style={styles.container}>
                <Text style={styles.text}>Spice Spice Baby Search Screen</Text>
                <StatusBar style="auto" />
              </View>
            )}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background.base,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: theme.text.base,
  },
});
