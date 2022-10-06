export class JsonRespValidator {
  public validate(json: any) {
    if (!json) {
      return "Cannot reach API";
    }

    return json.status == 1 ? "" : json.status_verbose;
  }
}
