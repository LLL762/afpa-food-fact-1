import A from "../assets/img/nutriscore/A.svg";
import B from "../assets/img/nutriscore/B.svg";
import C from "../assets/img/nutriscore/C.svg";
import D from "../assets/img/nutriscore/D.svg";
import E from "../assets/img/nutriscore/E.svg";
import unknown from "../assets/img/nutriscore/unknown.svg";

export class NutrigradeImgMapper {
  public toImg(_nutriGrade: string | undefined, htmlImg: JQuery<HTMLElement>) {
    const nutriGrade = _nutriGrade?.trim().toUpperCase();

    switch (nutriGrade) {
      case "A":
        htmlImg.attr({ src: A, alt: "nutrigrade A" });
        break;
      case "B":
        htmlImg.attr({ src: B, alt: "nutrigrade B" });
        break;
      case "C":
        htmlImg.attr({ src: C, alt: "nutrigrade C" });
        break;
      case "D":
        htmlImg.attr({ src: D, alt: "nutrigrade D" });
        break;
      case "E":
        htmlImg.attr({ src: E, alt: "nutrigrade E" });
        break;
      default:
        htmlImg.attr({ src: unknown, alt: "nutrigrade unknown" });
    }
  }
}
