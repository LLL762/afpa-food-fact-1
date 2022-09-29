import A from "../assets/img/nutriscore/A.svg";
import B from "../assets/img/nutriscore/B.svg";
import C from "../assets/img/nutriscore/C.svg";
import D from "../assets/img/nutriscore/D.svg";
import E from "../assets/img/nutriscore/E.svg";
import unknown from "../assets/img/nutriscore/unknown.svg";

const NutrigradeImgMapper = () => {
  const toImg = (_nutriGrade, htmlImg) => {
    const nutriGrade = _nutriGrade?.trim().toUpperCase();

    switch (nutriGrade) {
      case "A":
        htmlImg.attr("src", A);
        htmlImg.alt = "nutrigrade A";
        break;
      case "B":
        htmlImg.attr("src", B);
        htmlImg.alt = "nutrigrade B";
        break;
      case "C":
        htmlImg.attr("src", C);
        htmlImg.alt = "nutrigrade C";
        break;
      case "D":
        htmlImg.attr("src", D);
        htmlImg.alt = "nutrigrade D";
        break;
      case "E":
        htmlImg.attr("src", E);
        htmlImg.alt = "nutrigrade E";
        break;
      default:
        htmlImg.attr("src", unknown);
        htmlImg.alt = "nutrigrade unknown";
    }
  };

  return { toImg };
};

export { NutrigradeImgMapper };
