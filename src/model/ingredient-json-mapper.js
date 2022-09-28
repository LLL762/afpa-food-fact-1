import { Ingredient } from "./ingredient";

const IngredientJsonMapper = () => {
  const toIngredient = (jsonIngredient) => {
    return Ingredient(
      jsonIngredient?.text,
      jsonIngredient?.percent_estimate,
      jsonIngredient?.percent_max,
      jsonIngredient?.percent_min,
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
