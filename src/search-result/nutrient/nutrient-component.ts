import { ProductComponent } from "../../model/component";
import { NutrientLevels, NutrientValues } from "../../model/nutrient-levels";
import { Product } from "../../model/product";
import template from "./nutrient-levels.html";
const Mustache = require("mustache");

export class NutrientComponent implements ProductComponent {
  private nutrientElem!: JQuery<HTMLElement>;

  public display(product: Product): void {
    this.nutrientElem.html("");

    const nutrientLevels = product.nutrientLevels;

    if (!nutrientLevels) {
      return;
    }
    const view = new NutrientLevelsView(nutrientLevels);
    const rendered = Mustache.render(template, {
      view,
    });

    this.nutrientElem.append(rendered);
  }

  public init(): void {
    this.nutrientElem = $("#nutrient-levels");
  }
}

class NutrientLevelsView {
  private readonly _fat: string;
  private readonly _salt: string;
  private readonly _saturatedFat: string;
  private readonly _sugars: string;

  constructor(nutrientLevels: NutrientLevels) {
    this._fat = this.mapToIcon(nutrientLevels.fatLevel);
    this._salt = this.mapToIcon(nutrientLevels.saltLevel);
    this._saturatedFat = this.mapToIcon(nutrientLevels.saturatedFatLevel);
    this._sugars = this.mapToIcon(nutrientLevels.sugarsLevel);
  }

  private mapToIcon(level: string | undefined): string {
    switch (level?.trim().toLowerCase()) {
      case NutrientValues.LOW:
        return "🟢";
      case NutrientValues.AVERAGE:
        return "🟡";
      case NutrientValues.HIGH:
        return "🔴";
      default:
        return "?";
    }
  }

  public get sugars(): string {
    return this._sugars;
  }
  public get fat(): string {
    return this._fat;
  }
  public get salt(): string {
    return this._salt;
  }
  public get saturatedFat(): string {
    return this._saturatedFat;
  }
}
