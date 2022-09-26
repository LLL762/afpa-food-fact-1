import template from "./search-bar.html";
import "./search-bar.css";
import { EventNames, ObservableHelper } from "../obs-helper/obs-helper";

const SearchComponent = (foodService) => {
  const obsHelper = ObservableHelper();
  let searchInput;
  let form;

  const show = () => {
    const headerElem = document.querySelector("header");
    headerElem.innerHTML = template;
  };

  const init = () => {
    show();
    searchInput = document.querySelector("header #search-input");
    form = document.querySelector("header form");
    form.addEventListener("submit", (event) => onSubmit(event));
  };

  const getSearchValue = () => {
    if (!searchInput) throw new Error("");
    return searchInput.value;
  };

  const onSubmit = (event) => {
    event.preventDefault(); //prevent page reloading.

    const $product = foodService.getProductByCode(getSearchValue());

    obsHelper.notifyObservers(
      EventNames.getNewValidSearchResult(),
      0,
      $product
    );
  };

  const getObsHelper = () => {
    return obsHelper;
  };

  return { init, getSearchValue, getObsHelper };
};

export { SearchComponent };
