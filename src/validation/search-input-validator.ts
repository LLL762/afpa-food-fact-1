export class SearchInputValidator {
  private readonly blankMsg = "please enter a value";
  private readonly onlyDigitsMsg = "must only contain digits";
  private getMaxCharMsg(max: number): string {
    return `${max} character maximum`;
  }
  private readonly onlyDigitsRegex = new RegExp("^\\d+$");

  public validate(input: string, max: number): Map<string, string> {
    const errMap = new Map<string, string>();

    if (!input || input.trim().length == 0) {
      errMap.set("blank", this.blankMsg);
    }
    if (!this.onlyDigitsRegex.test(input)) {
      errMap.set("digits", this.onlyDigitsMsg);
    }
    if (max && input.length > max) {
      errMap.set("max", this.getMaxCharMsg(max));
    }

    return errMap;
  }
}
