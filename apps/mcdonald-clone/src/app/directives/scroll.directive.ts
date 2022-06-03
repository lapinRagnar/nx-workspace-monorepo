import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[monNxMonorepoScroll]'
})
export class ScrollDirective {

  @Input() valeurScrollYMin = 0
  @Input() valeurScrollYMax = 0

  @HostBinding('class.activer') activer: boolean

  @HostListener('window:scroll') onScroll() {
    console.log("le scrollY", window.scrollY)
    if ((window.scrollY > this.valeurScrollYMin) && (window.scrollY < this.valeurScrollYMax)  ) {
      this.activer = true
    } else {
      this.activer = false
    }
  
  }


}
