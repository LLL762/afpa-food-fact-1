import { ProductComponent } from "../../model/component";
import { Ingredient } from "../../model/ingredient";
import { Product } from "../../model/product";
import template from "./ingredient.html";

const Mustache = require("mustache");

export class IngredientsComponent implements ProductComponent {
  private ingredientsContent: JQuery<HTMLElement>;

  public display(product: Product): void {
    const ingredients: Ingredient[] = product.ingredients;
    this.ingredientsContent.html("");

    if (ingredients && ingredients.length > 0) {
      for (let ingredient of ingredients) {
        const rendered = Mustache.render(template, {
          ingredient,
        });

        this.ingredientsContent.append(rendered);
      }
    } else {
      this.ingredientsContent.html("no ingredients specified");
    }
  }

  public init(): void {
    this.ingredientsContent = $("#ingredients > .row");
  }
}
