import template from "./search-result.html";
import "./search-result.css";
import { Observer } from "../obs-helper/obs-helper";
import { ProductComponent } from "../model/component";
import { Product } from "../model/product";

export class SearchResultComponent implements Observer {
  private readonly subComponents: ProductComponent[] = [];
  private readonly mainElem: JQuery<HTMLElement> = $("main");

  public init(): void {
    this.mainElem.html(template);
    for (let subComponent of this.subComponents) {
      subComponent.init();
    }
  }

  public obsUpdate(eventName: string, any: any, newValue: Product): void {
    this.mainElem.removeClass("display-block");

    for (let subComponent of this.subComponents) {
      subComponent.display(newValue);
    }

    console.log(newValue.productDetails);

    this.mainElem.addClass("display-block");
  }

  public addSubComponent(components: ProductComponent[]): void {
    for (let subComponent of components) {
      this.subComponents.push(subComponent);
    }
  }
}
