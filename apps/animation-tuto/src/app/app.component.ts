import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { fade } from './transitions/transition1';

@Component({
  selector: 'mon-nx-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open <=> closed', [
        animate('1s')
      ]),
      transition('closed <=> open', [
        animate('0.5s')
      ]),
    ]),
    fade
  ]
})
export class AppComponent {
  title = 'animation-tuto';
  isOpen = true;
  items: string[] = []

  constructor(){
    this.items = ['ceci est un item', 'ceci est un autre item', 'ceci est encore un autre item' ]
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  pushItem() {
    this.items.push("c'est cool ca marche!")
  }

  removeItem() {
    this.items.pop()
  }

}
