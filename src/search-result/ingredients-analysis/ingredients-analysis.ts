import template from "./ingredients-analysis.html";
import "./ingredients-analysis.scss";
import { ProductComponent } from "../../model/component";
import { Product } from "../../model/product";
import {
  IngredientAnalysisTagsColors,
  TagsInfos,
  ViewData,
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
  private readonly _palmOil: ViewData;
  private readonly _vegan: ViewData;
  private readonly _vegetarian: ViewData;

  constructor(ingredientsAnalysis: IngredientsAnalysis) {
    this._palmOil = this.setColor(ingredientsAnalysis?.palmOilFree);
    this._vegan = this.setColor(ingredientsAnalysis?.vegan);
    this._vegetarian = this.setColor(ingredientsAnalysis?.vegetarian);
  }

  private setColor(field: string | undefined): ViewData {
    return field
      ? IngredientAnalysisTagsColors.MAP.get(this.removeLangTag(field)) ??
          new ViewData("grey", this.removeLangTag(field))
      : new ViewData("grey", "unknown");
  }

  private removeLangTag(analysis: string) {
    return analysis.trim().substring(TagsInfos.LANG_TAG_LENGTH).toLowerCase();
  }

  public get palmOil(): ViewData {
    return this._palmOil;
  }
  public get vegan(): ViewData {
    return this._vegan;
  }
  public get vegetarian(): ViewData {
    return this._vegetarian;
  }
}
