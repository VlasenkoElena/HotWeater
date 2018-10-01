import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  @Input("appBackground") color: string;

  highlight(color: string) {
    console.log(this.el.nativeElement);
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }

  @HostListener("mouseenter")
  onMouseEnter() {
    this.highlight(this.color);
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.highlight(null);
  }

}
