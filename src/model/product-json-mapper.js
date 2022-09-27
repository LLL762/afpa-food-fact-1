import { Product } from "./product";

const ProductJsonMapper = () => {
  const toProduct = (json) => {
    return Product(
      json.code,
      json.product?.product_name,
      json.product?.selected_images?.front?.display?.en,
      json.product?.selected_images?.nutrition?.display?.en,
      json.product?.nutriscore_grade,
      json.product?.nova_group,
      json.product?.ecoscore_grade,
      json.product?.ingredients_text
    );
  };

  return { toProduct };
};

export { ProductJsonMapper };
