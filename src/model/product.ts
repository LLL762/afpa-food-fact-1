import { Ingredient } from "./ingredient";
import { NutrientLevels } from "./nutrient-levels";
import { Nutriment } from "./nutriment";

export class Product {
  private readonly _code: string | undefined;
  private readonly _name: string | undefined;
  private readonly _imgUrl: string | undefined;
  private readonly _nutritionImgUrl: string | undefined;
  private readonly _nutriGrade: string | undefined;
  private readonly _novaGroup: number | undefined;
  private readonly _ecoScoreGrade: string | undefined;
  private readonly _ingredients: Ingredient[];
  private readonly _brand: string | undefined;
  private readonly _servingSize: string | undefined;
  private readonly _packaging: string | undefined;
  private readonly _nutrientLevels: NutrientLevels | undefined;
  private readonly _nutriments: Nutriment[];

  constructor(
    _code: string,
    _name: string,
    _imgUrl: string,
    _nutritionImgUrl: string,
    _nutriGrade: string,
    _novaGroup: number,
    _ecoScoreGrade: string,
    _ingredients: Ingredient[],
    _brand: string,
    _servingSize: string,
    _packaging: string,
    _nutrientLevels: NutrientLevels,
    _nutriments: Nutriment[]
  ) {
    this._code = _code;
    this._name = _name;
    this._imgUrl = _imgUrl;
    this._nutritionImgUrl = _nutritionImgUrl;
    this._nutriGrade = _nutriGrade;
    this._novaGroup = _novaGroup;
    this._ecoScoreGrade = _ecoScoreGrade;
    this._ingredients = _ingredients;
    this._brand = _brand;
    this._servingSize = _servingSize;
    this._packaging = _packaging;
    this._nutrientLevels = _nutrientLevels;
    this._nutriments = _nutriments;
  }

  public get nutritionImgUrl(): string | undefined {
    return this._nutritionImgUrl;
  }
  public get nutriGrade(): string | undefined {
    return this._nutriGrade;
  }
  public get novaGroup(): number | undefined {
    return this._novaGroup;
  }
  public get code(): string | undefined {
    return this._code;
  }
  public get ecoScoreGrade(): string | undefined {
    return this._ecoScoreGrade;
  }
  public get nutrientLevels(): NutrientLevels | undefined {
    return this._nutrientLevels;
  }
  public get packaging(): string | undefined {
    return this._packaging;
  }
  public get servingSize(): string | undefined {
    return this._servingSize;
  }
  public get brand(): string | undefined {
    return this._brand;
  }
  public get ingredients(): Ingredient[] {
    return this._ingredients;
  }
  public get nutriments(): Nutriment[] {
    return this._nutriments;
  }
  public get imgUrl(): string | undefined {
    return this._imgUrl;
  }
  public get name(): string | undefined {
    return this._name;
  }
}
