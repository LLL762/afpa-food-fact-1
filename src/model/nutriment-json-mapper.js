import { Nutriment } from "./nutriment";

const NutrimentsJsonMapper = () => {
  const blackListedKeys = ["nova-group", "nutrition-score"];

  const toNutriment = (json, nutrimentPrefix) => {
    return Nutriment(
      nutrimentPrefix,
      json[nutrimentPrefix + NutrimentSuffix.getQte100g()],
      json[nutrimentPrefix + NutrimentSuffix.getQteServed()],
      json[nutrimentPrefix + NutrimentSuffix.getQteUnit()],
      json[nutrimentPrefix + NutrimentSuffix.getValue()]
    );
  };

  const toNutrimentsList = (json) => {
    const output = [];

    if (!json) {
      return output;
    }

    const nutrimentKeys = Object.keys(json).filter(
      (key) =>
        !key.includes("_") &&
        !blackListedKeys.some((blKey) => key.startsWith(blKey))
    );

    for (let key of nutrimentKeys) {
      output.push(toNutriment(json, key));
    }

    return output;
  };

  return { toNutrimentsList };
};

const NutrimentSuffix = (() => {
  const qte100g = "_100g";
  const qteServed = "_serving";
  const qteUnit = "_unit";
  const value = "_value";

  const getQte100g = () => qte100g;
  const getQteServed = () => qteServed;
  const getQteUnit = () => qteUnit;
  const getValue = () => value;

  return { getQte100g, getQteServed, getQteUnit, getValue };
})();

export { NutrimentsJsonMapper };
