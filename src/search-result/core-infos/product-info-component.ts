import { ProductComponent } from "../../model/component";
import { Product } from "../../model/product";
import template from "./core-infos.html";
const Mustache = require("mustache");

export class ProductInfosComponent implements ProductComponent {
  private productInfosElem: JQuery<HTMLElement>;

  public init(): void {
    this.productInfosElem = $("#product-infos-core");
  }

  public display(product: Product): void {
    const rendered = Mustache.render(template, { product: product });
    this.productInfosElem.html(rendered);
  }
}
