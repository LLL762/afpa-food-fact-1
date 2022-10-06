import { ProductComponent } from "../../model/component";
import { Product } from "../../model/product";
import template from "./nutriments.html";
const Mustache = require("mustache");

export class NutrimentsComponent implements ProductComponent {
  private nutrimentsElem: JQuery<HTMLElement>;

  public display(product: Product): void {
    const nutriments = product.nutriments
      .filter((n) => n.qte100g > 0)
      .sort((n1, n2) => n2.qte100g - n1.qte100g);
    this.nutrimentsElem.html("");

    if (nutriments && nutriments.length > 0) {
      const rendered = Mustache.render(template, {
        productQte: product.servingSize,
        nutriments: nutriments,
      });
      this.nutrimentsElem.append(rendered);
    } else {
      this.nutrimentsElem.html("No nutriments info available");
    }
  }

  public init(): void {
    this.nutrimentsElem = $("#nutriments");
  }
}
