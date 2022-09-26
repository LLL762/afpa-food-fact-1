import { Product } from "./product";

const ProductJsonMapper = () => {
  const toProduct = (json) => {
    return Product(
      json.code,
      json.product.product_name,
      json.product.selected_images.front.display.en ?? false,
      json.product.selected_images.nutrition.display.en,
      json.product.nutriscore_grade,
      json.product.nova_group
    );
  };

  return { toProduct };
};

export { ProductJsonMapper };
