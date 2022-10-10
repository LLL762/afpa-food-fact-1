import { ProductComponent } from "../../model/component";
import { Ingredient, IngredientConfig } from "../../model/ingredient";
import { Product } from "../../model/product";
import template from "./ingredient.html";

const Mustache = require("mustache");

export class IngredientsComponent implements ProductComponent {
  private ingredientsContent!: JQuery<HTMLElement>;

  public display(product: Product): void {
    const ingredients: Ingredient[] = product.ingredients;

    this.ingredientsContent.html("");

    if (ingredients && ingredients.length > 0) {
      for (let ingredient of ingredients) {
        console.log(ingredient.vegeterian);
        const view = new IngredientView(ingredient);

        const rendered = Mustache.render(template, {
          ingredientView: view,
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

class IngredientView {
  private readonly _name: string;
  private readonly _percentEstimate: string;
  private readonly _percentMax: string;
  private readonly _percentMin: string;
  private readonly _veganColorHex: string;
  private readonly _vegeterianColorHex: string;
  private readonly _palmOil: string;

  constructor(ingredient: Ingredient) {
    this._name = ingredient.name ?? "unknown";
    this._percentEstimate = ingredient.percentEstimate ?? "??";
    this._percentMax = ingredient.percentMax ?? "??";
    this._percentMin = ingredient.percentMin ?? "??";
    this._veganColorHex = this.setColorVegie(ingredient.vegan);
    this._vegeterianColorHex = this.setColorVegie(ingredient.vegeterian);
    this._palmOil = this.setColorPalmOil(ingredient.palmOil);
  }

  public get percentMax(): string | undefined {
    return this._percentMax;
  }
  public get name(): string | undefined {
    return this._name;
  }
  public get percentEstimate(): string | undefined {
    return this._percentEstimate;
  }
  public get percentMin(): string | undefined {
    return this._percentMin;
  }
  public get vegan(): string | undefined {
    return this._veganColorHex;
  }
  public get vegeterian(): string | undefined {
    return this._vegeterianColorHex;
  }

  public get palmOil(): string {
    return this._palmOil;
  }

  private setColorVegie(vegie: string | undefined): string {
    if (!vegie) {
      return "grey";
    }

    switch (vegie) {
      case IngredientConfig.VEGIE_MSG_FALSE:
        return "red";
      case IngredientConfig.VEGIE_MSG_TRUE:
        return "green";
      default:
        return "grey";
    }
  }

  private setColorPalmOil(palmOil: string | undefined): string {
    if (!palmOil) {
      return "grey";
    }

    switch (palmOil) {
      case IngredientConfig.VEGIE_MSG_FALSE:
        return "green";
      case IngredientConfig.VEGIE_MSG_TRUE:
        return "red";
      default:
        return "grey";
    }
  }
}
