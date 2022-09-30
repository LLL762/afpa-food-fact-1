import template from "./search-bar.html";
import "./search-bar.scss";
import { EventNames, ObservableHelper } from "../obs-helper/obs-helper";

const SearchComponent = (foodService, searchInputValidator) => {
  const obsHelper = ObservableHelper();
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
    const searchValue = event.currentTarget.value;
    const validResult = searchInputValidator.validate(searchValue);

    if (validResult.length > 0) {
      const newValue = searchValue.slice(0, -1);
      const newValueValid = searchInputValidator.validate(newValue);

      if (newValueValid.length > 0) {
        event.currentTarget.value = "";
        submitBtn.prop("disabled", true);
      } else {
        event.currentTarget.value = newValue;
      }
    } else {
      submitBtn.prop("disabled", false);
    }
  };

  const setMsg = (msg) => {
    switch (msg) {
      case "product found!":
        searchMsg.removeClass("text-info text-danger").addClass("text-success");
        break;
      case "Trying to fetch resource from api please wait":
        searchMsg.removeClass("text-success text-danger").addClass("text-info");
        break;
      default:
        searchMsg.removeClass("text-success text-info").addClass("text-danger");
        break;
    }
    searchMsg.text(msg);
  };

  return { init, getSearchValue, getObsHelper, setMsg };
};

export { SearchComponent };
