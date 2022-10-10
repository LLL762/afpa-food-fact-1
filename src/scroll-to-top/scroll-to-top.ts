import "./scroll-to-top.css";

export class ScrollToTopComponent {
  private scrollToTopBtn: JQuery<HTMLElement>;

  public init(): void {
    this.scrollToTopBtn = $("#scroll-to-top");
    this.scrollToTopBtn.on("click", () => this.funScroll());
    window.addEventListener("scroll", () => this.onWindowScroll());
  }

  private onWindowScroll(): void {
    window.scrollY > 5
      ? this.scrollToTopBtn.removeClass("d-none")
      : this.scrollToTopBtn.addClass("d-none");
  }

  private funScroll: Function = () => {
    window.scrollTo(0, 0);
  };
}
