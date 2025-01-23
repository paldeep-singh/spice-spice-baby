import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { theme } from "../utils/theme";
import { BottomTabScreenProps } from "../navigation/types";

export function PlaceholderScreen({
  route,
}: BottomTabScreenProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Spice Spice Baby {route.name} Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background.base,
    alignItems: "center",
    justifyContent: "center",
  } satisfies ViewStyle,
  text: {
    color: theme.text.base,
  } satisfies TextStyle,
});
