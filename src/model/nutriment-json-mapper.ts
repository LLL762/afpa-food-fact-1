import { Nutriment } from "./nutriment";

export class NutrimentsJsonMapper {
  private readonly blackListedKeys = ["nova-group", "nutrition-score"];

  public toNutriment(json: any, nutrimentPrefix: string): Nutriment {
    return new Nutriment(
      nutrimentPrefix,
      json[nutrimentPrefix + NutrimentSuffix.QTE_100_G],
      json[nutrimentPrefix + NutrimentSuffix.QTE_SERVED],
      json[nutrimentPrefix + NutrimentSuffix.QTE_UNIT],
      json[nutrimentPrefix + NutrimentSuffix.VALUE]
    );
  }

  public toNutrimentsList(json: any): Nutriment[] {
    const output: Nutriment[] = [];

    if (!json) {
      return output;
    }

    const nutrimentKeys = Object.keys(json).filter(
      (key) =>
        !key.includes("_") &&
        !this.blackListedKeys.some((blKey) => key.startsWith(blKey))
    );

    for (let key of nutrimentKeys) {
      output.push(this.toNutriment(json, key));
    }

    return output;
  }
}

export class NutrimentSuffix {
  public static readonly QTE_100_G = "_100g";
  public static readonly QTE_SERVED = "_serving";
  public static readonly QTE_UNIT = "_unit";
  public static readonly VALUE = "_value";
}
