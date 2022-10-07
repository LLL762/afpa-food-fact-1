export class SearchInputValidator {
  private readonly onlyDigitsRegex = /^\d+$/;
  public static readonly KEY_BLANK = "blank";
  public static readonly KEY_DIGITS = "digits";
  public static readonly KEY_MAX = "max";

  public validate(input: string, max: number): Map<string, string> {
    const errMap = new Map<string, string>();

    if (!input || input.trim().length == 0) {
      errMap.set(SearchInputValidator.KEY_BLANK, ErrorMsg.BLANK_MSG);
      return errMap;
    }
    if (!this.onlyDigitsRegex.test(input)) {
      errMap.set(SearchInputValidator.KEY_DIGITS, ErrorMsg.DIGITS_ONLY);
    }
    if (max && input.length > max) {
      errMap.set(SearchInputValidator.KEY_MAX, ErrorMsg.FUN_MAX_CHAR(max));
    }
    return errMap;
  }
}

export class ErrorMsg {
  public static readonly BLANK_MSG = "please enter a value";
  public static readonly DIGITS_ONLY = "must only contain digits";
  public static readonly FUN_MAX_CHAR = (max: number) =>
    max + " character maximum";
}
