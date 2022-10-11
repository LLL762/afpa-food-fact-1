import { IngredientsAnalysis } from "./ingrediens-analysis/ingredient-analysis";

export class ProductDetails {
  private readonly _allergens: string | undefined;
  private readonly _additives: string | undefined;
  private readonly _categories: string | undefined;
  private readonly _ingredientsAnalysis: IngredientsAnalysis | undefined;

  constructor(
    _allergens: string,
    _additives: string,
    _categories: string,
    _ingredientsAnalysis: IngredientsAnalysis
  ) {
    this._allergens = _allergens;
    this._additives = _additives;
    this._categories = _categories;
    this._ingredientsAnalysis = _ingredientsAnalysis;
  }

  public get ingredientsAnalysis(): IngredientsAnalysis | undefined {
    return this._ingredientsAnalysis;
  }

  public get categories(): string | undefined {
    return this._categories;
  }

  public get additives(): string | undefined {
    return this._additives;
  }

  public get allergens(): string | undefined {
    return this._allergens;
  }
}
