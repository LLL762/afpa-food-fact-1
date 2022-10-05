export class NutrientLevels {
  private readonly _fatLevel: string | undefined;
  private readonly _saltLevel: string | undefined;
  private readonly _saturatedFatLevel: string | undefined;
  private readonly _sugarsLevel: string | undefined;

  constructor(
    _fatLevel: string | undefined,
    _saltLevel: string | undefined,
    _saturatedFatLevel: string | undefined,
    _sugarsLevel: string | undefined
  ) {
    this._fatLevel = _fatLevel;
    this._saltLevel = _saltLevel;
    this._saturatedFatLevel = _saturatedFatLevel;
    this._sugarsLevel = _sugarsLevel;
  }

  public get fatLevel(): string | undefined {
    return this._fatLevel;
  }
  public get saltLevel(): string | undefined {
    return this._saltLevel;
  }
  public get saturatedFatLevel(): string | undefined {
    return this._saturatedFatLevel;
  }
  public get sugarsLevel(): string | undefined {
    return this._sugarsLevel;
  }
}

export enum NutrientValues {
  LOW = "low",
  AVERAGE = "moderate",
  HIGH = "high",
}
