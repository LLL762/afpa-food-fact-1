import { FoodService } from "./api-service/food-service";
import { SearchComponent } from "./search-bar/search-bar";
import { IngredientsComponent } from "./search-result/ingredients/ingredients-component";
import { SearchResultComponent } from "./search-result/search-result";
import "./style.scss";
import { JsonRespValidator } from "./validation/json-resp-validator";
import { SearchInputValidator } from "./validation/search-input-validator";
import "bootstrap";
import { NutrientComponent } from "./search-result/nutrient/nutrient-component";
import { NutrimentsComponent } from "./search-result/nutriments/nutriment-component";
import { IngredientJsonMapper } from "./model/ingredient-json-mapper";
import { NutrientLevelsJsonMapper } from "./model/nutrient-levels-json-mapper";
import { NutrimentsJsonMapper } from "./model/nutriment-json-mapper";
import { ProductJsonMapper } from "./model/product-json-mapper";
import { ProductTemplateMapper } from "./search-result/product-template-mapper";
import { NutrigradeImgMapper } from "./search-result/nutrigrade-img-mapper";
import { NovaMapper } from "./search-result/nova-score-img-mapper";
import { EcoMapper } from "./search-result/eco-grade-img-mapper";
import { ProductInfosComponent } from "./search-result/core-infos/product-info-component";
import { LangTagFilter } from "./search-result/tag-filter";
import { FoodServiceMock } from "./api-service/food-service-mock";

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

const searchInputValidator = new SearchInputValidator();

const searchBar = new SearchComponent(
  FoodServiceMock(
    new ProductJsonMapper(
      ingredientJsonMapper,
      nutrientLevelsJsonMapper,
      nutrimentJsonMapper
    )
  ),
  searchInputValidator
);
const searchResult = new SearchResultComponent();

const productTemplateMapper = new ProductTemplateMapper(
  new NutrigradeImgMapper(),
  new NovaMapper(),
  new EcoMapper()
);

searchResult.addSubComponent([
  productTemplateMapper,
  new IngredientsComponent(),
  new NutrientComponent(),
  new NutrimentsComponent(),
  new ProductInfosComponent(new LangTagFilter()),
]);

searchBar.init();
searchBar.getObsHelper().addObserver(searchResult);
searchResult.init();
