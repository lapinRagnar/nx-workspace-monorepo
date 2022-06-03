import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';


@Directive({
  selector: '[monNxMonorepoDropdown]',
})
export class DropdownDirective {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}
  
  @HostListener('mouseover') onMouseOver() {
    const elementCollection = document.getElementsByClassName('navbar');
    if (elementCollection[0].clientWidth > 1007) {
    this.renderer.addClass(this.elementRef.nativeElement, 'open');
  }
}

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.elementRef.nativeElement, 'open');
  }


}

// @NgModule({
//   imports: [CommonModule],
//   declarations: [DirectivesDropdownDirective],
//   exports: [DirectivesDropdownDirective],
// })
// export class DirectivesDropdownDirectiveModule {}
