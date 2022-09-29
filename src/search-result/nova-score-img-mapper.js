import _1 from "../assets/img/nova-group/1.svg";
import _2 from "../assets/img/nova-group/2.svg";
import _3 from "../assets/img/nova-group/3.svg";
import _4 from "../assets/img/nova-group/4.svg";
import unknown from "../assets/img/nova-group/unknown.svg";

const NovaMapper = () => {
  const toImg = (nova, htmlImg) => {
    switch (nova) {
      case 1:
        htmlImg.attr("src", _1);
        htmlImg.alt = "nova score 1";
        break;
      case 2:
        htmlImg.attr("src", _2);
        htmlImg.alt = "nova score 2";
        break;
      case 3:
        htmlImg.attr("src", _3);
        htmlImg.alt = "nova score 3";
        break;
      case 4:
        htmlImg.attr("src", _4);
        htmlImg.alt = "nova score 4";
        break;
      default:
        htmlImg.attr("src", unknown);
        htmlImg.alt = "No nova score for this product";
    }
  };

  return { toImg };
};

export { NovaMapper };
