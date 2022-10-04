import { NutrientValues } from "../../model/nutrient-levels";
import template from "./nutrient-levels.html";
import "./nutrient.scss";
const Mustache = require("mustache");

const NutrientComponent = () => {
  let nutrientElem;

  const display = (product) => {
    nutrientElem.html("");

    const nutrientLevels = product.getNutrientLevels();

    console.log(nutrientLevels.getSugarsLevel());
    const view = NutrientLevelsView(nutrientLevels);
    const rendered = Mustache.render(template, {
      view,
    });

    nutrientElem.append(rendered);
  };

  const NutrientLevelsView = (nutrientLevels) => {
    const fat = mapToIcon(nutrientLevels.getFatLevel());
    const salt = mapToIcon(nutrientLevels.getSaltLevel());
    const saturatedFat = mapToIcon(nutrientLevels.getSaturatedFatLevel());
    const sugars = mapToIcon(nutrientLevels.getSugarsLevel());

    return { fat, saturatedFat, sugars, salt };
  };

  const mapToIcon = (level) => {
    switch (level?.trim().toLowerCase()) {
      case NutrientValues.getLow():
        return "🟢";
      case NutrientValues.getAverage():
        return "🟡";
      case NutrientValues.getHigh():
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
