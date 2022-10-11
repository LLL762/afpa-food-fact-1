export class IngredientsAnalysis {
  private readonly _palmOilFree: string | undefined;
  private readonly _vegan: string | undefined;
  private readonly _vegetarian: string | undefined;

  constructor(_palmOilFree: string, _vegan: string, _vegetarian: string) {
    this._palmOilFree = _palmOilFree;
    this._vegan = _vegan;
    this._vegetarian = _vegetarian;
  }

  public get vegetarian(): string | undefined {
    return this._vegetarian;
  }
  public get vegan(): string | undefined {
    return this._vegan;
  }
  public get palmOilFree(): string | undefined {
    return this._palmOilFree;
  }
}
