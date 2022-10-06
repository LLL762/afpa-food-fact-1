import { ProductComponent } from "../../model/component";
import { Product } from "../../model/product";
import template from "./core-infos.html";
import imgNotFound from "../../assets/img/image-off.svg";
const Mustache = require("mustache");

export class ProductInfosComponent implements ProductComponent {
  private productInfosElem: JQuery<HTMLElement>;

  public init(): void {
    this.productInfosElem = $("#product-infos-core");
  }

  public display(product: Product): void {
    const imgUrl = product.imgUrl ?? imgNotFound;
    const rendered = Mustache.render(template, {
      img: imgUrl,
      product: product,
    });
    this.productInfosElem.html(rendered);
  }
}

class ProductInfoView {}
