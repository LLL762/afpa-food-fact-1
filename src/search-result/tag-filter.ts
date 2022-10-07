import { LangTagNames } from "../config/tags-names";

export class LangTagFilter {
  filter(packaging: string[], tagName: LangTagNames): string {
    return (
      packaging
        .filter((p) => p.startsWith(tagName))
        .map((p) => p.slice(tagName.length))
        .join(", ") || "Not supported in" + tagName
    );
  }
}
