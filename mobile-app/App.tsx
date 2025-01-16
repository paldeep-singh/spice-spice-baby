import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={() => (
          <View style={styles.container}>
            <Text>Spice Spice Baby Home Screen</Text>
            <StatusBar style="auto" />
          </View>
        )}
      />
      <Tab.Screen
        name="Search"
        component={() => (
          <View style={styles.container}>
            <Text>Spice Spice Baby Search Screen</Text>
            <StatusBar style="auto" />
          </View>
        )}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22262E",
    alignItems: "center",
    justifyContent: "center",
  },
});
