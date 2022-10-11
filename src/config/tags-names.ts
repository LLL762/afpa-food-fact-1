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

export class ViewData {
  color: string;
  msg: string;

  constructor(color: string, msg: string) {
    this.color = color;
    this.msg = msg;
  }
}

export class IngredientAnalysisTagsColors {
  private static readonly _MAP = new Map([
    [IngredientAnalysisTags.PALM_OIL, new ViewData("red", "Contain palm-oil")],
    [
      IngredientAnalysisTags.NO_PALM_OIL,
      new ViewData("green", "Palm oil free"),
    ],
    [IngredientAnalysisTags.VEGAN, new ViewData("green", "Vegan friendly")],
    [
      IngredientAnalysisTags.NON_VEGAN,
      new ViewData("red", "Not vegan friendly"),
    ],
    [IngredientAnalysisTags.VEGETARIAN, new ViewData("green", "Vegetarian")],
    [
      IngredientAnalysisTags.NON_VEGETARIAN,
      new ViewData("red", "Not vegetarian"),
    ],
  ]);

  public static get MAP(): Map<string, ViewData> {
    return new Map(
      JSON.parse(JSON.stringify(Array.from(IngredientAnalysisTagsColors._MAP)))
    );
  }
}

export enum TagsInfos {
  LANG_TAG_LENGTH = 3,
}
