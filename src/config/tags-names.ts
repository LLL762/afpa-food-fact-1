export enum LangTagNames {
  EN = "en:",
  FR = "fr:",
}

export enum IngredientAnalysisTags {
  PALM_OIL = "palm-oil",
  NO_PALM_OIL = "palm-oil-free",
  VEGAN = "vegan",
  NON_VEGAN = "non-vegan",
  VEGETARIAN = "vegetarian",
  NON_VEGETARIAN = "non-vegetarian",
}

export class IngredientAnalysisTagsColors {
  private static readonly _MAP = new Map([
    [IngredientAnalysisTags.PALM_OIL, "red"],
    [IngredientAnalysisTags.NO_PALM_OIL, "green"],
    [IngredientAnalysisTags.VEGAN, "green"],
    [IngredientAnalysisTags.NON_VEGAN, "red"],
    [IngredientAnalysisTags.VEGETARIAN, "green"],
    [IngredientAnalysisTags.NON_VEGETARIAN, "red"],
  ]);

  public static get MAP(): Map<string, string> {
    return new Map(
      JSON.parse(JSON.stringify(Array.from(IngredientAnalysisTagsColors._MAP)))
    );
  }
}

export enum TagsInfos {
  LANG_TAG_LENGTH = 3,
}
