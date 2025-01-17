import { Image, View } from "react-native";
import { RecipePreview } from "../mockData/useMockRecipes";

export function RecipeCard({ image }: RecipePreview): JSX.Element {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{ uri: image }}
        style={{ aspectRatio: 1.18, width: "100%" }}
      />
    </View>
  );
}
