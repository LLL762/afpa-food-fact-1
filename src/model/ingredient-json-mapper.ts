import { Ingredient } from "./ingredient";

export class IngredientJsonMapper {
  public toIngredient(jsonIngredient: any): Ingredient {
    return new Ingredient(
      jsonIngredient?.text,
      jsonIngredient?.percent_estimate?.toFixed(2),
      jsonIngredient?.percent_max?.toFixed(2),
      jsonIngredient?.percent_min?.toFixed(2),
      jsonIngredient?.vegan,
      jsonIngredient?.vegeterian
    );
  }

  public toIngredientList(jsonArray: any): Ingredient[] {
    const output: Ingredient[] = [];

    if (!jsonArray) {
      return output;
    }

    jsonArray.forEach((node: any) => {
      output.push(this.toIngredient(node));
    });

    return output;
  }
}
