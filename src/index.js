import { FoodServiceMock } from "./api-service/food-service-mock.js";
import { FoodService } from "./api-service/food-service.js";
import { IngredientJsonMapper } from "./model/ingredient-json-mapper.js";
import { ProductJsonMapper } from "./model/product-json-mapper.js";
import { SearchComponent } from "./search-bar/search-bar.js";
import { IngredientsComponent } from "./search-result/ingredients/ingredients-component.js";
import { SearchResultComponent } from "./search-result/search-result.js";
import "./style.scss";
import { JsonRespValidator } from "./validation/json-resp-validator.js";
import { SearchInputValidator } from "./validation/search-input-validator.js";
import "bootstrap";
import { NutrientLevelsJsonMapper } from "./model/nutrient-levels-json-mapper.js";
import { NutrientComponent } from "./search-result/nutrient/nutrient-component.js";
import { NutrimentsJsonMapper } from "./model/nutriment-json-mapper.js";
import { NutrimentsComponent } from "./search-result/nutriments/nutriment-component.js";

const ingredientJsonMapper = IngredientJsonMapper();
const nutrientLevelsJsonMapper = NutrientLevelsJsonMapper();
const nutrimentJsonMapper = NutrimentsJsonMapper();

const foodService = FoodService(
  ProductJsonMapper(
    ingredientJsonMapper,
    nutrientLevelsJsonMapper,
    nutrimentJsonMapper
  ),
  JsonRespValidator()
);
const foodServiceMock = FoodServiceMock(
  ProductJsonMapper(ingredientJsonMapper),
  JsonRespValidator()
);
const searchInputValidator = SearchInputValidator(15);

const searchBar = SearchComponent(foodService, searchInputValidator);
const searchResult = SearchResultComponent(
  IngredientsComponent(),
  NutrientComponent(),
  NutrimentsComponent()
);

searchBar.init();
searchBar.getObsHelper().addObserver(searchResult.getObserverHelper());
searchResult.init();
