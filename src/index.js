import { FoodService } from "./api-service/food-service.js";
import { ProductJsonMapper } from "./model/product-json-mapper.js";
import { SearchComponent } from "./search-bar/search-bar.js";
import { SearchResultComponent } from "./search-result/search-result.js";
import css from "./style.css";
import { JsonRespValidator } from "./validation/json-resp-validator.js";

const foodService = FoodService(ProductJsonMapper(), JsonRespValidator());
const searchBar = SearchComponent(foodService);
const searchResult = SearchResultComponent();

searchBar.init();
searchBar.getObsHelper().addObserver(searchResult.getObserverHelper());
searchResult.init();
