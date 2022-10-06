import { EcoMapper } from "./eco-grade-img-mapper";
import { NovaMapper } from "./nova-score-img-mapper";
import { NutrigradeImgMapper } from "./nutrigrade-img-mapper";
import noImg from "../assets/img/image-off.svg";
import { Product } from "../model/product";
import { ProductComponent } from "../model/component";

export class ProductTemplateMapper implements ProductComponent {
  private readonly nutrigradeImgMapper: NutrigradeImgMapper;
  private readonly novaMapper: NovaMapper;
  private readonly ecoMapper: EcoMapper;

  private img: JQuery<HTMLElement>;
  private nutritionImg: JQuery<HTMLElement>;
  private nutriGradeImg: JQuery<HTMLElement>;
  private novaGoupImg: JQuery<HTMLElement>;
  private ecoImg: JQuery<HTMLElement>;

  constructor(
    nutrigradeImgMapper: NutrigradeImgMapper,
    novaMapper: NovaMapper,
    ecoMapper: EcoMapper
  ) {
    this.nutrigradeImgMapper = nutrigradeImgMapper;
    this.novaMapper = novaMapper;
    this.ecoMapper = ecoMapper;
  }

  public display(product: Product): void {
    this.img.attr("src", product.imgUrl || noImg);
    this.nutritionImg.attr("src", product.nutritionImgUrl || noImg);

    this.nutrigradeImgMapper.toImg(product.nutriGrade, this.nutriGradeImg);
    this.novaMapper.toImg(product.novaGroup, this.novaGoupImg);
    this.ecoMapper.toImg(product.ecoScoreGrade, this.ecoImg);
  }

  public init(): void {
    this.img = $("#product-img");
    this.nutritionImg = $("#product-nutrition-img");
    this.nutriGradeImg = $("#product-nutri-grade");
    this.novaGoupImg = $("#product-nova-img");
    this.ecoImg = $("#product-eco-img");
  }
}

/* packElement.text(
  product.packaging
    ? TagFilter().filter(product.packaging, TagNames.getEnTag())
    : fallBackValue
); */
