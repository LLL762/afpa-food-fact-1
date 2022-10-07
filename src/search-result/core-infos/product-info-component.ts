import { ProductComponent } from "../../model/component";
import { Product } from "../../model/product";
import template from "./core-infos.html";
import imgNotFound from "../../assets/img/image-off.svg";
import { LangTagFilter } from "../tag-filter";
import { LangTagNames } from "../../config/tags-names";
const Mustache = require("mustache");

export class ProductInfosComponent implements ProductComponent {
  private readonly langTagFilter: LangTagFilter;
  private productInfosElem: JQuery<HTMLElement>;

  constructor(langTagFilter: LangTagFilter) {
    this.langTagFilter = langTagFilter;
  }

  public init(): void {
    this.productInfosElem = $("#product-infos-core");
  }

  public display(product: Product): void {
    const view = new ProductInfoView(product, this.langTagFilter);

    const rendered = Mustache.render(template, {
      productView: view,
    });
    this.productInfosElem.html(rendered);
  }
}

class ProductInfoView {
  private readonly _imgUrl: string;
  private readonly _name: string;
  private readonly _code: string;
  private readonly _brand: string;
  private readonly _qte: string;
  private readonly _pack: string;

  constructor(product: Product, langTagFilter: LangTagFilter) {
    this._imgUrl = product.imgUrl ?? imgNotFound;
    this._name = product.name ?? "no name found";
    this._code = product.code ?? "code unknown";
    this._brand = product.brand ?? "unknown brand";
    this._qte = product.servingSize ?? "serving quantity unknown";
    this._pack = product.packaging
      ? langTagFilter.filter(product.packaging, LangTagNames.EN)
      : "no info available";
  }

  public get brand(): string {
    return this._brand;
  }
  public get qte(): string {
    return this._qte;
  }
  public get pack(): string {
    return this._pack;
  }
  public get code(): string {
    return this._code;
  }
  public get name(): string {
    return this._name;
  }
  public get imgUrl(): string {
    return this._imgUrl;
  }
}
