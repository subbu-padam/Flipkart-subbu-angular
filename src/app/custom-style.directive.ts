import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = "yellow";
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = null;
  }

  constructor(public element: ElementRef ) {
    element.nativeElement.className = "green";
  }

}
