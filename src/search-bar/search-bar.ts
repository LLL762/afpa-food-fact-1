import template from "./search-bar.html";
import "./search-bar.scss";
import { EventNames, ObservableHelper } from "../obs-helper/obs-helper";
import { IFoodService } from "../api-service/ifood-service";
import { SearchInputValidator } from "../validation/search-input-validator";
import { Product } from "../model/product";

export class SearchComponent {
  private readonly foodService: IFoodService;
  private readonly searchInputValidator: SearchInputValidator;

  private readonly obsHelper = new ObservableHelper();
  private readonly msgClassList = "text-info text-danger text-sucess";
  private searchInput!: JQuery<HTMLElement>;
  private submitBtn!: JQuery<HTMLElement>;
  private searchMsg!: JQuery<HTMLElement>;

  constructor(
    foodService: IFoodService,
    searchInputValidator: SearchInputValidator
  ) {
    this.foodService = foodService;
    this.searchInputValidator = searchInputValidator;
  }

  private show(): void {
    const headerElem = $("header");
    headerElem.html(template);
  }

  public init(): void {
    this.show();
    this.searchInput = $("header #search-input");
    this.searchMsg = $("header #search-msg");
    this.submitBtn = $("header #search-submit-btn");

    this.submitBtn.prop("disabled", true);
    $("header form").on("submit", (e) => this.onSubmit(e));
    this.searchInput.on("input", (e) => this.onInputSearch(e));
  }

  private getSearchValue(): string | undefined {
    return this.searchInput?.val()?.toString();
  }

  private onSubmit = (event: JQuery.TriggeredEvent) => {
    event.preventDefault(); //prevent page reloading.

    this.setMsg("Trying to fetch resource from api please wait");

    const $product = this.foodService.getProductByCode(this.getSearchValue());

    $product.then((result) =>
      typeof result === "string"
        ? this.setMsg(result)
        : this.notifyObservers(result)
    );
  };

  notifyObservers = (product: Product) => {
    this.obsHelper.notifyObservers(EventNames.VALID_SEARCH_RESULT, 0, product);
    this.setMsg("product found!");
  };

  public getObsHelper(): ObservableHelper {
    return this.obsHelper;
  }

  private onInputSearch = (event: JQuery.TriggeredEvent) => {
    const newValue = this.searchInput.val().toString();
    const oldValue = this.searchInput.attr("oldValue") ?? "";
    const validResult = this.searchInputValidator.validate(newValue, 15);

    if (validResult.size > 0 && newValue.length > 0) {
      this.searchInput.val(oldValue);
    } else {
      this.submitBtn.prop("disabled", newValue.length < 5);
      this.searchInput.attr("oldValue", newValue);
      this.searchInput.val(newValue.trim());
    }
  };

  private setMsg = (msg: string) => {
    switch (msg) {
      case "product found!":
        this.searchMsg.removeClass(this.msgClassList).addClass("text-success");
        break;
      case "Trying to fetch resource from api please wait":
        this.searchMsg.removeClass(this.msgClassList).addClass("text-info");
        break;
      default:
        this.searchMsg.removeClass(this.msgClassList).addClass("text-danger");
        break;
    }
    this.searchMsg.text(msg);
  };
}
