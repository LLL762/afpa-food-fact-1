import { Ingredient } from "./ingredient";

const IngredientJsonMapper = () => {
  const toIngredient = (jsonIngredient) => {
    return Ingredient(
      jsonIngredient?.text,
      jsonIngredient?.percent_estimate?.toFixed(2),
      jsonIngredient?.percent_max?.toFixed(2),
      jsonIngredient?.percent_min?.toFixed(2),
      jsonIngredient?.vegan,
      jsonIngredient?.vegeterian
    );
  };

  const toIngredientList = (jsonArray) => {
    const output = [];

    if (!jsonArray) {
      return "undefined";
    }

    jsonArray.forEach((node) => {
      output.push(toIngredient(node));
    });

    return output;
  };

  return { toIngredient, toIngredientList };
};

export { IngredientJsonMapper };
