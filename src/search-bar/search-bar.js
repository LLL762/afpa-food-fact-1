import template from "./search-bar.html";
import "./search-bar.scss";
import { EventNames, ObservableHelper } from "../obs-helper/obs-helper";

const SearchComponent = (foodService, searchInputValidator) => {
  const obsHelper = ObservableHelper();
  const msgClassList = "text-info text-danger text-sucess";
  let searchInput;
  let submitBtn;
  let searchMsg;

  const show = () => {
    const headerElem = $("header");
    headerElem.html(template);
  };

  const init = () => {
    show();
    searchInput = $("header #search-input");
    searchMsg = $("header #search-msg");
    submitBtn = $("header #search-submit-btn");

    submitBtn.disabled = true;
    $("header form").on("submit", (e) => onSubmit(e));
    searchInput.on("input", (e) => onInputSearch(e));
  };

  const getSearchValue = () => {
    return searchInput?.val();
  };

  const onSubmit = (event) => {
    event.preventDefault(); //prevent page reloading.

    setMsg("Trying to fetch resource from api please wait");

    const $product = foodService.getProductByCode(getSearchValue());

    $product.then((result) =>
      typeof result === "string" ? setMsg(result) : notifyObservers(result)
    );
  };

  const notifyObservers = (product) => {
    obsHelper.notifyObservers(EventNames.getNewValidSearchResult(), 0, product);
    setMsg("product found!");
  };

  const getObsHelper = () => {
    return obsHelper;
  };

  const onInputSearch = (event) => {
    const newValue = searchInput.val();
    const oldValue = searchInput.attr("oldValue") ?? "";
    const validResult = searchInputValidator.validate(newValue);
    console.log(newValue);
    if (validResult.length > 0 && newValue.length > 0) {
      searchInput.val(oldValue);
    } else {
      submitBtn.prop("disabled", newValue.length < 5);
      searchInput.attr("oldValue", newValue);
      searchInput.val(newValue.trim());
    }
  };

  const setMsg = (msg) => {
    switch (msg) {
      case "product found!":
        searchMsg.removeClass(msgClassList).addClass("text-success");
        break;
      case "Trying to fetch resource from api please wait":
        searchMsg.removeClass(msgClassList).addClass("text-info");
        break;
      default:
        searchMsg.removeClass(msgClassList).addClass("text-danger");
        break;
    }
    searchMsg.text(msg);
  };

  return { init, getSearchValue, getObsHelper, setMsg };
};

export { SearchComponent };
