import { theme } from "../utils/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";

import { View, Text, TouchableHighlight } from "react-native";
import { useBottomTabBarHeight } from "react-native-bottom-tabs";

export interface Ingredient {
  id: string;
  name: string;
  amountNumerator: number;
  amountDenominator: number;
  units: string | null;
}

function IngredientItem({
  id,
  name,
  amountNumerator,
  amountDenominator,
  units,
}: Ingredient): JSX.Element {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
      }}
    >
      <Text style={{ color: theme.text.base }}>{name}</Text>
      <Text style={{ color: theme.text.base }}>
        {amountNumerator}
        {amountDenominator !== 1 && "/" + amountDenominator} {units}
      </Text>
    </View>
  );
}

const mockIngredients: Ingredient[] = [
  {
    id: "1",
    name: "Flour",
    amountNumerator: 1,
    amountDenominator: 2,
    units: "cup",
  },
  {
    id: "2",
    name: "Sugar",
    amountNumerator: 1,
    amountDenominator: 2,
    units: "cup",
  },
  {
    id: "3",
    name: "Milk",
    amountNumerator: 1,
    amountDenominator: 2,
    units: "cup",
  },
  {
    id: "4",
    name: "Eggs",
    amountNumerator: 4,
    amountDenominator: 1,
    units: null,
  },
];

export function InventoryScreen(): JSX.Element {
  const bottomTabBarHeight = useBottomTabBarHeight();
  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.background.base,
        flexGrow: 1,
        paddingBottom: bottomTabBarHeight,
      }}
    >
      <FlatList
        data={mockIngredients}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <IngredientItem {...item} />}
      />
      <TouchableHighlight
        style={{
          padding: 16,
          backgroundColor: theme.background.light,
          width: "100%",
        }}
        onPress={() => {}}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ color: theme.text.selected }}>Add Ingredient</Text>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
}
