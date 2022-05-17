import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import gsap from 'gsap';


@Directive({
  selector: '[monNxMonorepoCoreAnimation]'
})
export class CoreAnimationDirective {

  @Input() duration = 1;
  @Input() delay = 0;

  @Output() completeEventEmitter: EventEmitter<null> = new EventEmitter();
  @Output() reverseComplete: EventEmitter<null> = new EventEmitter();
  protected timeline = gsap.timeline();

  constructor(protected element: ElementRef) {

  }
}
