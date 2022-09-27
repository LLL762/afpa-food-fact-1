import template from "./search-bar.html";
import "./search-bar.css";
import { EventNames, ObservableHelper } from "../obs-helper/obs-helper";

const SearchComponent = (foodService, searchInputValidator) => {
  const obsHelper = ObservableHelper();
  let searchInput;
  let submitBtn;
  let form;
  let searchMsg;

  const show = () => {
    const headerElem = document.querySelector("header");
    headerElem.innerHTML = template;
  };

  const init = () => {
    show();
    searchInput = document.querySelector("header #search-input");
    form = document.querySelector("header form");
    searchMsg = document.querySelector("header #search-msg");
    submitBtn = document.querySelector("header #search-submit-btn");

    submitBtn.disabled = true;
    form.addEventListener("submit", (event) => onSubmit(event));
    searchInput.addEventListener("input", (event) => onKeyDownSearch(event));
  };

  const getSearchValue = () => {
    if (!searchInput) throw new Error("");
    return searchInput.value;
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

  const onKeyDownSearch = (event) => {
    const searchValue = event.currentTarget.value;
    const validResult = searchInputValidator.validate(searchValue, 15);

    if (validResult.length > 0) {
      const newValue = searchValue.slice(0, -1);
      const newValueValid = searchInputValidator.validate(newValue, 15);

      if (newValueValid.length > 0) {
        event.currentTarget.value = "";
        submitBtn.disabled = true;
      } else {
        event.currentTarget.value = newValue;
      }
    } else {
      submitBtn.disabled = false;
    }
  };

  const setMsg = (msg) => {
    switch (msg) {
      case "product found!":
        searchMsg.classList.value = "ok";
        break;
      case "Trying to fetch resource from api please wait":
        searchMsg.classList.value = "info";
        break;
      default:
        searchMsg.classList.value = "warning";
        break;
    }

    searchMsg.textContent = msg;
  };

  return { init, getSearchValue, getObsHelper, setMsg };
};

export { SearchComponent };
