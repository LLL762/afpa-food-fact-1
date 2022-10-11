import { IngredientsAnalysis } from "./ingredient-analysis";

export class IngredientsAnalysisJsonMapper {
  public toIngredientsAnalysis(jsonArray: string[]): IngredientsAnalysis {
    return jsonArray
      ? new IngredientsAnalysis(jsonArray[0], jsonArray[1], jsonArray[2])
      : undefined;
  }
}
