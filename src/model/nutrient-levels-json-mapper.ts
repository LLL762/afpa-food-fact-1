import { NutrientLevels } from "./nutrient-levels";

export class NutrientLevelsJsonMapper {
  public toNutrientLevels(jsonNutrient: any): NutrientLevels | undefined {
    return jsonNutrient
      ? new NutrientLevels(
          jsonNutrient.fat,
          jsonNutrient.salt,
          jsonNutrient["saturated-fat"],
          jsonNutrient.sugars
        )
      : undefined;
  }
}
