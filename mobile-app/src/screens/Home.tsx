import {
  View,
  StyleSheet,
  TextStyle,
  ViewStyle,
  ActivityIndicator,
} from "react-native";
import { theme } from "../utils/theme";
import { useMockRecipes } from "../mockData/useMockRecipes";
import { RecipeCard } from "../components/RecipeCard";
import { MasonryFlashList } from "@shopify/flash-list";

export function HomeScreen(): JSX.Element {
  const { loading, data } = useMockRecipes();

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View style={{ width: "100%", height: "100%" }}>
          <MasonryFlashList
            data={data}
            renderItem={({ item }) => <RecipeCard {...item} />}
            keyExtractor={({ id }) => id}
            numColumns={2}
            estimatedItemSize={166}
          />
        </View>
        // <FlatList
        //   data={data}
        //   renderItem={({ item }) => <RecipeCard {...item} />}
        //   keyExtractor={({ id }) => id}
        //   numColumns={2}
        // />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.background.base,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  } satisfies ViewStyle,
  text: {
    color: theme.text.base,
  } satisfies TextStyle,
  row: {
    flex: 1,
    justifyContent: "space-around",
  } satisfies ViewStyle,
});
