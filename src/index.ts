import { FoodService } from "./api-service/food-service";
import { SearchComponent } from "./search-bar/search-bar.js";
import { IngredientsComponent } from "./search-result/ingredients/ingredients-component";
import { SearchResultComponent } from "./search-result/search-result.js";
import "./style.scss";
import { JsonRespValidator } from "./validation/json-resp-validator";
import { SearchInputValidator } from "./validation/search-input-validator.js";
import "bootstrap";
import { NutrientComponent } from "./search-result/nutrient/nutrient-component.js";
import { NutrimentsComponent } from "./search-result/nutriments/nutriment-component";
import { IngredientJsonMapper } from "./model/ingredient-json-mapper";
import { NutrientLevelsJsonMapper } from "./model/nutrient-levels-json-mapper";
import { NutrimentsJsonMapper } from "./model/nutriment-json-mapper";
import { ProductJsonMapper } from "./model/product-json-mapper";

const ingredientJsonMapper = new IngredientJsonMapper();
const nutrientLevelsJsonMapper = new NutrientLevelsJsonMapper();
const nutrimentJsonMapper = new NutrimentsJsonMapper();

const foodService = new FoodService(
  new ProductJsonMapper(
    ingredientJsonMapper,
    nutrientLevelsJsonMapper,
    nutrimentJsonMapper
  ),
  new JsonRespValidator()
);

const searchInputValidator = SearchInputValidator(15);

const searchBar = SearchComponent(foodService, searchInputValidator);
const searchResult = SearchResultComponent(
  new IngredientsComponent(),
  NutrientComponent(),
  new NutrimentsComponent()
);

searchBar.init();
searchBar.getObsHelper().addObserver(searchResult.getObserverHelper());
searchResult.init();
