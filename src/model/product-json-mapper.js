import { Product } from "./product";

const ProductJsonMapper = (ingredientJsonMapper, nutrientLevelsJsonMapper) => {
  const toProduct = (json) => {
    return Product(
      json.code,
      json.product?.product_name,
      json.product?.selected_images?.front?.display?.en,
      json.product?.selected_images?.nutrition?.display?.en,
      json.product?.nutriscore_grade,
      json.product?.nova_group,
      json.product?.ecoscore_grade,
      ingredientJsonMapper.toIngredientList(json.product?.ingredients),
      json.product?.brands,
      json.product?.serving_size,
      json.product?.packaging_tags,
      nutrientLevelsJsonMapper.toNutrientLevels(json.product?.nutrient_levels)
    );
  };

  return { toProduct };
};

export { ProductJsonMapper };
