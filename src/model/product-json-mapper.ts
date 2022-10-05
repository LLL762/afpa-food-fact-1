import { IngredientJsonMapper } from "./ingredient-json-mapper";
import { NutrientLevelsJsonMapper } from "./nutrient-levels-json-mapper";
import { NutrimentsJsonMapper } from "./nutriment-json-mapper";
import { Product } from "./product";

export class ProductJsonMapper {
  private readonly ingredientJsonMapper: IngredientJsonMapper;
  private readonly nutrientLevelsJsonMapper: NutrientLevelsJsonMapper;
  private readonly nutrimentsMapper: NutrimentsJsonMapper;

  constructor(
    ingredientJsonMapper: IngredientJsonMapper,
    nutrientLevelsJsonMapper: NutrientLevelsJsonMapper,
    nutrimentsMapper: NutrimentsJsonMapper
  ) {
    this.ingredientJsonMapper = ingredientJsonMapper;
    this.nutrientLevelsJsonMapper = nutrientLevelsJsonMapper;
    this.nutrimentsMapper = nutrimentsMapper;
  }

  public toProduct(json: any): Product {
    return new Product(
      json.code,
      json.product?.product_name,
      json.product?.selected_images?.front?.display?.en,
      json.product?.selected_images?.nutrition?.display?.en,
      json.product?.nutriscore_grade,
      json.product?.nova_group,
      json.product?.ecoscore_grade,
      this.ingredientJsonMapper.toIngredientList(json.product?.ingredients),
      json.product?.brands,
      json.product?.serving_size,
      json.product?.packaging_tags,
      this.nutrientLevelsJsonMapper.toNutrientLevels(
        json.product?.nutrient_levels
      ),
      this.nutrimentsMapper.toNutrimentsList(json?.product?.nutriments)
    );
  }
}
