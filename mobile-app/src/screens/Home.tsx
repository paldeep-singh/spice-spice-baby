import { View, Text, StyleSheet } from "react-native";
import { theme } from "../utils/theme";

export function HomeScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Spice Spice Baby Home Screen</Text>
    </View>
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
