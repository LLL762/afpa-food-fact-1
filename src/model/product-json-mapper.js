import { Product } from "./product";

const ProductJsonMapper = () => {
  const toProduct = (json) => {
    return Product(json.code, json.product.product_name);
  };

  return { toProduct };
};

export { ProductJsonMapper };
