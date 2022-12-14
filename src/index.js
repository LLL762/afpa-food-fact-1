import { FoodServiceMock } from "./api-service/food-service-mock.js";
import { FoodService } from "./api-service/food-service.js";
import { IngredientJsonMapper } from "./model/ingredient-json-mapper.js";
import { ProductJsonMapper } from "./model/product-json-mapper.js";
import { SearchComponent } from "./search-bar/search-bar.js";
import { IngredientsComponent } from "./search-result/ingredients/ingredients-component.js";
import { SearchResultComponent } from "./search-result/search-result.js";
import css from "./style.css";
import { JsonRespValidator } from "./validation/json-resp-validator.js";
import { SearchInputValidator } from "./validation/search-input-validator.js";

const ingredientJsonMapper = IngredientJsonMapper();
const foodService = FoodService(
  ProductJsonMapper(ingredientJsonMapper),
  JsonRespValidator()
);
const foodServiceMock = FoodServiceMock(
  ProductJsonMapper(),
  JsonRespValidator()
);
const searchInputValidator = SearchInputValidator();

const searchBar = SearchComponent(foodService, searchInputValidator);
const searchResult = SearchResultComponent(IngredientsComponent());

searchBar.init();
searchBar.getObsHelper().addObserver(searchResult.getObserverHelper());
searchResult.init();
