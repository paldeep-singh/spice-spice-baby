import { useEffect, useState } from "react";
import jsonData from "./data.json"; // Import the JSON file

type RecipeList = {
  name: string;
  image: string;
  id: string;
}[];

export function useMockRecipes(): { loading: boolean; data: RecipeList } {
  const [recipes, setRecipes] = useState<RecipeList>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const truncatedData = jsonData.map(({ mealId, name, pictureLink }) => ({
      name,
      id: mealId,
      image: pictureLink,
    }));

    setRecipes(truncatedData);
    setLoading(false);
  }, []);

  return {
    loading,
    data: recipes,
  };
}
