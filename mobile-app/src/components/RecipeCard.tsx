import { ActivityIndicator, Image, StyleSheet, View, Text } from "react-native";
import { RecipePreview } from "../mockData/useMockRecipes";
import { theme } from "../utils/theme";
import { useState } from "react";

export function RecipeCard({ image, name }: RecipePreview): JSX.Element {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: image }}
        style={styles.image}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
      <Text style={styles.text}>{name}</Text>
      {loading && <ActivityIndicator style={styles.loading} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: theme.border,
    borderWidth: 2,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.border,
  },
  image: {
    aspectRatio: 0.85,
    width: "100%",
    borderRadius: 20,
    backgroundColor: theme.background.base,
  },
  loading: { position: "absolute" },
  text: {
    color: theme.text.border,
    paddingVertical: 4,
    paddingHorizontal: 8,
    textAlign: "center",
  },
});
