import template from "./ingredients-analysis.html";
import "./ingredients-analysis.scss";
import { ProductComponent } from "../../model/component";
import { Product } from "../../model/product";
import {
  IngredientAnalysisTagsColors,
  TagsInfos,
} from "../../config/tags-names";
import { IngredientsAnalysis } from "../../model/ingrediens-analysis/ingredient-analysis";
const Mustache = require("mustache");

export class IngredientsAnalysisComponent implements ProductComponent {
  private container: JQuery<HTMLElement>;

  init(): void {
    this.container = $("#ingredients-analysis");
  }

  display(product: Product): void {
    this.container.html("");
    const ingredientsAnalysis = product.productDetails.ingredientsAnalysis;
    const view = new IngredientsAnalysisView(ingredientsAnalysis);
    const rendered = Mustache.render(template, {
      ingredientsAnalysisView: view,
    });
    this.container.html(rendered);
  }
}

class IngredientsAnalysisView {
  private readonly _palmOil: string;
  private readonly _vegan: string;
  private readonly _vegetarian: string;

  constructor(ingredientsAnalysis: IngredientsAnalysis) {
    this._palmOil = this.setColor(ingredientsAnalysis?.palmOilFree);
    this._vegan = this.setColor(ingredientsAnalysis?.vegan);
    this._vegetarian = this.setColor(ingredientsAnalysis?.vegetarian);
  }

  private setColor(field: string | undefined): string {
    return field
      ? IngredientAnalysisTagsColors.MAP.get(this.removeLangTag(field)) ??
          "grey"
      : "grey";
  }

  private removeLangTag(analysis: string) {
    return analysis.trim().substring(TagsInfos.LANG_TAG_LENGTH).toLowerCase();
  }

  public get palmOil(): string {
    return this._palmOil;
  }
  public get vegan(): string {
    return this._vegan;
  }
  public get vegetarian(): string {
    return this._vegetarian;
  }
}
