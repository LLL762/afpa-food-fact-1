import { Product } from "./product";

export interface ProductComponent {
  init(): void;
  display(product: Product): void;
}
