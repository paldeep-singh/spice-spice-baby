import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#22262E" },
          headerTitleStyle: { color: "#ffffff" },
          tabBarStyle: {
            backgroundColor: "#323232",
            borderTopColor: "#323232",
          },
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22262E",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#ffffff",
  },
});
