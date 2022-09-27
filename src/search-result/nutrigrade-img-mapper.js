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
        htmlImg.setAttribute("src", A);
        htmlImg.alt = "nutrigrade A";
        break;
      case "B":
        htmlImg.setAttribute("src", B);
        htmlImg.alt = "nutrigrade B";
        break;
      case "C":
        htmlImg.setAttribute("src", C);
        htmlImg.alt = "nutrigrade C";
        break;
      case "D":
        htmlImg.setAttribute("src", D);
        htmlImg.alt = "nutrigrade D";
        break;
      case "E":
        htmlImg.setAttribute("src", E);
        htmlImg.alt = "nutrigrade E";
        break;
      default:
        htmlImg.setAttribute("src", unknown);
        htmlImg.alt = "nutrigrade unknown";
    }
  };

  return { toImg };
};

export { NutrigradeImgMapper };
