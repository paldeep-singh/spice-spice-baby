// Import Recipes, ingredients, and tags, create ingredient relationships, and create tag relationships
LOAD CSV WITH HEADERS FROM "file:///data/testRecipes.csv" AS row
WITH row,
    split(row.ingredientList, ',') AS ingredientList,
    split(row.tags, ',') AS tags,
    split(row.unitsList, ',') AS unitsList,
    split(row.amountList, ',') AS amountList,
    split(row.ingredientPrep, ',') AS ingredientPrep,
    split(row.mainIngredients, ',') AS mainIngredients
WITH collect({
    idMeal: toInteger(row.idMeal),
    name: row.name,
    steps: row.steps,
    pictureLink: row.pictureLink,
    ingredientList: ingredientList,
    tags: tags,
    unitsList: CASE WHEN row.unitsList IS NULL THEN [] ELSE unitsList END,
    amountList: CASE WHEN row.amountList IS NULL THEN [] ELSE amountList END,
    ingredientPrep: CASE WHEN row.ingredientPrep IS NULL THEN [] ELSE ingredientPrep END,
    mainIngredients: mainIngredients
}) AS recipe_collection
FOREACH (rc IN recipe_collection | 
    MERGE (r:Recipe {name: rc.name})
    FOREACH (ingIdx IN range(0, size(rc.ingredientList)-1) |
        MERGE (i:Ingredient {name: rc.ingredientList[ingIdx]})
        MERGE (r)-[c:HAS_INGREDIENT]->(i)
        SET c.unit = CASE WHEN size(rc.unitsList) > ingIdx THEN rc.unitsList[ingIdx] ELSE NULL END,
            c.preparation = CASE WHEN size(rc.ingredientPrep) > ingIdx THEN rc.ingredientPrep[ingIdx] ELSE NULL END,
            c.amount = CASE WHEN size(rc.amountList) > ingIdx THEN rc.amountList[ingIdx] ELSE NULL END,
            c.main = false
    )
    FOREACH (tagIdx IN range(0, size(rc.tags)-1) |
        MERGE (t:Tag {name: rc.tags[tagIdx]})
        MERGE (r)-[:HAS_TAG]->(t)
    )
    FOREACH (mainIngIdx IN range(0, size(rc.mainIngredients)-1) |
        MERGE (mi:Ingredient {name: rc.mainIngredients[mainIngIdx]})
        MERGE (r)-[hmi:HAS_INGREDIENT]->(mi)
        SET hmi.main = true
    )
    SET r.method = rc.steps, r.picture = rc.pictureLink
);

// Import Tags and Categories
LOAD CSV WITH HEADERS FROM "file:///data/testTags.csv" AS row
MATCH (t:Tag {name: row.tagName})
MERGE (c:Category {name: row.categoryName})
MERGE (t)-[:IS_A]->(c);
