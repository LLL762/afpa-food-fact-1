import { Product } from "../model/product";

export interface IFoodService {
  getProductByCode(code: string): Promise<Product | string>;
}
