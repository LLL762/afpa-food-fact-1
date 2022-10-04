import { NutrientLevels } from "./nutrient-levels";

const NutrientLevelsJsonMapper = () => {
  const toNutrientLevels = (jsonNutrient) => {
    return jsonNutrient
      ? NutrientLevels(
          jsonNutrient.fat,
          jsonNutrient.salt,
          jsonNutrient["saturated-fat"],
          jsonNutrient.sugars
        )
      : NutrientLevels();
  };

  return { toNutrientLevels };
};

export { NutrientLevelsJsonMapper };
