const SearchInputValidator = (max) => {
  const blankMsg = "please enter a value";
  const isNanMsg = "character is not a number";
  const maxCharMsg = `${max} character maximum`;
  const isNumberRegex = new RegExp("^\\d+$");

  const validate = (input) => {
    if (!input || input.trim().length == 0) {
      return blankMsg;
    }

    if (!isNumberRegex.test(input)) {
      return isNanMsg;
    }
    if (input.length > max) {
      return maxCharMsg;
    }

    return "";
  };

  const getBlankMsg = () => blankMsg;
  const getIsNanMsg = () => isNanMsg;
  const getMaxCharMsg = () => maxCharMsg;

  return { validate, getBlankMsg, getIsNanMsg, getMaxCharMsg };
};

export { SearchInputValidator };
