import A from "../assets/img/nutriscore/A.svg";
import B from "../assets/img/nutriscore/B.svg";
import C from "../assets/img/nutriscore/C.svg";
import D from "../assets/img/nutriscore/D.svg";
import E from "../assets/img/nutriscore/E.svg";

const NutrigradeImgMapper = () => {
  const toImg = (_nutriGrade, htmlImg) => {
    const nutriGrade = _nutriGrade.trim().toUpperCase();

    switch (nutriGrade) {
      case "A":
        htmlImg.setAttribute("src", A);
        break;
      case "B":
        htmlImg.setAttribute("src", B);
        break;
      case "C":
        htmlImg.setAttribute("src", C);
        break;
      case "D":
        htmlImg.setAttribute("src", D);
        break;
      case "E":
        htmlImg.setAttribute("src", E);
        break;
    }
  };

  return { toImg };
};

export { NutrigradeImgMapper };
