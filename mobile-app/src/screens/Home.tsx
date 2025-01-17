import {
  View,
  StyleSheet,
  TextStyle,
  ViewStyle,
  ActivityIndicator,
  FlatList,
  ListRenderItem,
} from "react-native";
import { theme } from "../utils/theme";
import { RecipePreview, useMockRecipes } from "../mockData/useMockRecipes";
import { RecipeCard } from "../components/RecipeCard";

export function HomeScreen(): JSX.Element {
  const { loading, data } = useMockRecipes();

  const renderItem: ListRenderItem<RecipePreview> = ({ item }) => (
    <View style={styles.cardContainer}>
      <RecipeCard {...item} />
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.ListContainer}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={({ id }) => id}
            numColumns={2}
          />
        </View>
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

  cardContainer: { padding: 8, flex: 1 },
  ListContainer: {
    width: "100%",
    height: "100%",
  },
});
