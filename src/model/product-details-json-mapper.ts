import { IngredientsAnalysisJsonMapper } from "./ingrediens-analysis/ingredient-analysis-json-mapper";
import { ProductDetails } from "./product-detail";

export class ProductDetailsJsonMapper {
  private readonly ingredientsAnalysisJsonMapper: IngredientsAnalysisJsonMapper;

  constructor(ingredientsAnalysisJsonMapper: IngredientsAnalysisJsonMapper) {
    this.ingredientsAnalysisJsonMapper = ingredientsAnalysisJsonMapper;
  }

  public toProductDetails(json: any): ProductDetails {
    return new ProductDetails(
      json?.product?.allergens_tags,
      json?.product?.additives_tags,
      json?.product?.categories_tags,
      this.ingredientsAnalysisJsonMapper.toIngredientsAnalysis(
        json?.product?.ingredients_analysis_tags
      )
    );
  }
}
