export class Nutriment {
  private readonly _name: string | undefined;
  private readonly _qte100g: string | undefined;
  private readonly _qteServed: string | undefined;
  private readonly _qteUnit: string | undefined;
  private readonly _value: string | undefined;

  constructor(
    _name: string | undefined,
    _qte100g: string | undefined,
    _qteServed: string | undefined,
    _qteUnit: string | undefined,
    _value: string | undefined
  ) {
    this._name = _name;
    this._qte100g = _qte100g;
    this._qteServed = _qteServed;
    this._qteUnit = _qteUnit;
    this._value = _value;
  }

  public get name(): string | undefined {
    return this._name;
  }
  public get qte100g(): string | undefined {
    return this._qte100g;
  }
  public get qteServed(): string | undefined {
    return this._qteServed;
  }
  public get qteUnit(): string | undefined {
    return this._qteUnit;
  }
  public get value(): string | undefined {
    return this._value;
  }
}
