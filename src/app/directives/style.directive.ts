import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appStyle]"
})
export class StyleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  toggleFlag = false;
  @HostListener("click") onclick() {
    this.renderer.addClass(this.el.nativeElement, "style-button");

    let listClass = document.querySelectorAll("[appStyle]");
    
    for (let i = 0; i < listClass.length; i++) {
      if (listClass[i] !== this.el.nativeElement) {
        listClass[i].classList.remove("style-button");
      }
    }
  }
}
