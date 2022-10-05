import { NutrientValues } from "../../model/nutrient-levels";
import template from "./nutrient-levels.html";
const Mustache = require("mustache");

const NutrientComponent = () => {
  let nutrientElem;

  const display = (product) => {
    nutrientElem.html("");

    const nutrientLevels = product.nutrientLevels;

    const view = NutrientLevelsView(nutrientLevels);
    const rendered = Mustache.render(template, {
      view,
    });

    nutrientElem.append(rendered);
  };

  const NutrientLevelsView = (nutrientLevels) => {
    const fat = mapToIcon(nutrientLevels.fatLevel);
    const salt = mapToIcon(nutrientLevels.saltLevel);
    const saturatedFat = mapToIcon(nutrientLevels.saturatedFatLevel);
    const sugars = mapToIcon(nutrientLevels.sugarsLevel);

    return { fat, saturatedFat, sugars, salt };
  };

  const mapToIcon = (level) => {
    switch (level?.trim().toLowerCase()) {
      case NutrientValues.LOW:
        return "🟢";
      case NutrientValues.AVERAGE:
        return "🟡";
      case NutrientValues.HIGH:
        return "🔴";
      default:
        return "?";
    }
  };

  const init = () => {
    nutrientElem = $("#nutrient-levels");
  };

  return { init, display };
};

export { NutrientComponent };
