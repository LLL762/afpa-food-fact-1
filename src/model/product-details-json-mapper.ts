import { ProductDetails } from "./product-detail";

export class ProductDetailsJsonMapper {
  public toProductDetails(json: any): ProductDetails {
    return new ProductDetails(
      json?.product?.allergens_tags,
      json?.product?.additives_tags,
      json?.product?.categories_tags,
      json?.product?.ingredients_analysis_tag
    );
  }
}
