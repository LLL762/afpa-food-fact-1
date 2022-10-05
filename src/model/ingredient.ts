export class Ingredient {
  private readonly _name: string | undefined;
  private readonly _percentEstimate: string | undefined;
  private readonly _percentMax: string | undefined;
  private readonly _percentMin: string | undefined;
  private readonly _vegan: string | undefined;
  private readonly _vegeterian: string | undefined;

  constructor(
    _name: string | undefined,
    _percentEstimate: string | undefined,
    _percentMax: string | undefined,
    _percentMin: string | undefined,
    _vegan: string | undefined,
    _vegeterian: string | undefined
  ) {
    this._name = _name;
    this._percentEstimate = _percentEstimate;
    this._percentMax = _percentMax;
    this._percentMin = _percentMin;
    this._vegan = _vegan;
    this._vegeterian = _vegeterian;
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
    return this._vegan;
  }
  public get vegeterian(): string | undefined {
    return this._vegeterian;
  }
}
