import { FoodService } from "./api-service/food-service.js";
import { ProductJsonMapper } from "./model/product-json-mapper.js";
import { SearchComponent } from "./search-bar/search-bar.js";
import { SearchResultComponent } from "./search-result/search-result.js";
import css from "./style.css";

const foodService = FoodService(ProductJsonMapper());
const searchBar = SearchComponent(foodService);
const searchResult = SearchResultComponent();

searchBar.init();
searchBar.getObsHelper().addObserver(searchResult.getObserverHelper());
searchResult.init();
