export class ObservableHelper {
  private readonly observers: Observer[] = [];

  public addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer) {
    this.observers.splice(this.observers.indexOf(observer), 1);
  }

  public notifyObservers(eventName: string, oldValue: any, newValue: any) {
    if (oldValue != newValue) {
      for (let observer of this.observers) {
        observer.obsUpdate(eventName, oldValue, newValue);
      }
    }
  }
}

export interface Observer {
  obsUpdate(eventName: string, oldValue: any, newValue: any): void;
}

export class EventNames {
  private static readonly _VALID_SEARCH_RESULT: string =
    "new-valid-search-result";

  public static get VALID_SEARCH_RESULT(): string {
    return EventNames._VALID_SEARCH_RESULT;
  }
}
