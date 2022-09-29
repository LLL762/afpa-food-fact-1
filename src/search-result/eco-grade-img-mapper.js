import A from "../assets/img/eco-score/A.svg";
import B from "../assets/img/eco-score/B.svg";
import C from "../assets/img/eco-score/C.svg";
import D from "../assets/img/eco-score/D.svg";
import E from "../assets/img/eco-score/E.svg";
import neutre from "../assets/img/eco-score/neutre.svg";

const EcoMapper = () => {
  const toImg = (ecoGrade, htmlImg) => {
    switch (ecoGrade?.trim().toUpperCase()) {
      case "A":
        htmlImg.attr("src", A);
        htmlImg.alt = "eco grade A";
        break;
      case "B":
        htmlImg.attr("src", B);
        htmlImg.alt = "eco grade B";
        break;
      case "C":
        htmlImg.attr("src", C);
        htmlImg.alt = "eco grade C";
        break;
      case "D":
        htmlImg.attr("src", D);
        htmlImg.alt = "eco grade D";
        break;
      case "E":
        htmlImg.attr("src", E);
        htmlImg.alt = "eco grade E";
        break;
      default:
        htmlImg.attr("src", neutre);
        htmlImg.alt = "No eco grade defined";
    }
  };

  return { toImg };
};

export { EcoMapper };
