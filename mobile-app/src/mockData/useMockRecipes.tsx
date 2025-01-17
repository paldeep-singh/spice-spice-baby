import { useEffect, useState } from "react";
import jsonData from "./data.json"; // Import the JSON file

export interface RecipePreview {
  name: string;
  image: string;
  id: string;
}

type RecipePreviewList = RecipePreview[];

export function useMockRecipes(): {
  loading: boolean;
  data: RecipePreviewList;
} {
  const [recipes, setRecipes] = useState<RecipePreviewList>([]);
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
